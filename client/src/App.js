import "./App.css";
import Display from "./components/Display";
import SearchArea from "./components/SearchArea";
import Info from "./components/Info";
import { useState } from "react";

const axios = require("axios").default;

function App() {
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    height: "",
    weight: "",
    types: [],
    caught: false,
    img: "",
  });
  const [info, setInfo] = useState({
    next: null,
    prev: null,
    results: [],
  });

  async function toggleCatchRelease() {
    try {
      const collection = await axios.get(`/api/collection`);

      const data = pokemon.caught
        ? await axios.delete(`/api/collection/release/${pokemon.name}`)
        : await axios.post(`/api/collection/catch`, {
            name: pokemon.name,
          });

      const newInfo = data.data;
      pokemon.caught = !pokemon.caught;

      if (checkIfInfoIsCollection(info, collection.data)) {
        setInfo(newInfo);
        getPokemonImages(newInfo);
        return;
      }

      const updatedResults = info.results.map((aPokemon) => {
        if (aPokemon.name === pokemon.name) aPokemon.caught = pokemon.caught;
        return aPokemon;
      });

      setInfo(
        JSON.parse(
          JSON.stringify({
            next: info.next,
            prev: info.prev,
            results: updatedResults,
          })
        )
      );
      setPokemon(JSON.parse(JSON.stringify(pokemon)));
    } catch {
      setError(true);
    }
  }

  function showEveryPokemon() {
    axios
      .get(`/api/pokemon`)
      .then((data) => {
        const info = data.data;
        setError(false);
        setInfo(info);
        getPokemonImages(info);
      })
      .catch(() => {
        setError(true);
      });
  }

  function showAnotherPage(nextOrPrev) {
    if (!nextOrPrev) return;

    axios
      .get(`/api/pokemon/${nextOrPrev}`)
      .then((data) => {
        const info = data.data;
        setError(false);
        setInfo(info);
        getPokemonImages(info);
      })
      .catch(() => {
        setError(true);
      });
  }

  function showCollection() {
    axios
      .get(`/api/collection`)
      .then((data) => {
        const info = data.data;
        setError(false);
        setInfo(info);
        getPokemonImages(info);
      })
      .catch(() => {
        setError(true);
      });
  }

  function getPokemonImages(info) {
    info.results.map((pokemon) => {
      if (pokemon.name === "Your collection is empty") return;
      axios
        .get(`/api/pokemon/${pokemon.name}`)
        .then(({ data }) => {
          const { front_default } = data.img;
          pokemon.img = front_default;
          const newInfo = {
            next: info.next,
            prev: info.prev,
            results: info.results,
          };
          setInfo(newInfo);
        })
        .catch(() => {
          console.log("Some of the pokemon images couldn't load");
        });
    });
  }

  function getTypesList(e) {
    const type = e.target.innerText;
    axios
      .get(`/api/type/${type}`)
      .then((data) => {
        const info = data.data;
        setInfo(info);
        getPokemonImages(info);
      })
      .catch(() => {
        setError(true);
      });
  }

  function searchPokemon() {
    const name = input.toLowerCase();

    if (name === "") return;

    axios
      .get(`/api/pokemon/${name}`)
      .then((data) => {
        const pokemon = data.data;
        setError(false);
        setPokemon(pokemon);
      })
      .catch(() => {
        setError(true);
      });
  }

  function showPokemon(e) {
    const name = e.target.innerText;
    axios.get(`/api/pokemon/${name}`).then((data) => {
      const pokemon = data.data;
      setError(false);
      setPokemon(pokemon);
    });
  }

  return (
    <>
      <h1 className="header">Pokedex</h1>
      <SearchArea
        search={(e) => {
          setInput(e.target.value);
        }}
        showCollection={showCollection}
        searchPokemon={searchPokemon}
        showEveryPokemon={showEveryPokemon}
      />
      {error ? (
        <div className="error">
          <img className="errorimg" src="./sad_pikachu.gif" />
          <h2>Pikachu not Found</h2>
        </div>
      ) : (
        <Display
          toggleCatchRelease={toggleCatchRelease}
          pokemon={pokemon}
          getTypesList={getTypesList}
        />
      )}
      {info.length !== 0 && (
        <Info
          info={info}
          showPokemon={showPokemon}
          showAnotherPage={showAnotherPage}
        />
      )}
    </>
  );
}

// helper function
function checkIfInfoIsCollection(info, collection) {
  const infoNames = info.results.map((pokemon) => pokemon.name);
  const collectionNames = collection.results.map((pokemon) => pokemon.name);
  if (JSON.stringify(infoNames) === JSON.stringify(collectionNames))
    return true;
  return false;
}

export default App;
