import "./App.css";
import Display from "./components/Display";
import SearchArea from "./components/SearchArea";
import Info from "./components/Info";
import { useState } from "react";

const axios = require("axios").default;

function App() {
  const [state, setState] = useState({
    input: "",
    pokemon: {
      Name: "",
      Height: "",
      Weight: "",
      Types: [],
      caught: false,
      img: "",
    },
    info: [],
  });

  function search(e) {
    const input = e.target.value;
    setState({
      input,
      pokemon: state.pokemon,
      info: state.info,
    });
  }

  function showCollection() {
    axios
      .get(`/api/collection`)
      .then((data) => {
        const info = data.data.userCollection;
        setState({
          input: state.input,
          pokemon: state.pokemon,
          info,
        });
      })
      .catch((err) => console.log(err));
  }

  function searchPokemon() {
    const name = state.input;
    axios.get(`/api/pokemon/${name}`).then((data) => {
      const pokemon = data.data;
      setState({
        input: state.input,
        pokemon,
        info: state.info,
      });
    });
  }
  return (
    <>
      <h1>Pokedex</h1>
      <SearchArea
        input={state.input}
        search={search}
        showCollection={showCollection}
        searchPokemon={searchPokemon}
      />
      <Display caught={state.caught} pokemon={state.pokemon} />
      {state.info.length !== 0 && (
        <Info info={state.info} searchPokemon={searchPokemon} />
      )}
    </>
  );
}

export default App;
