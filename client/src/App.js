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

  function toggleCatchRelease() {
    setState({
      input: state.input,
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
    const pokemon = {
      Name: "yair",
      Height: "1234",
      Weight: "12341234",
      Types: ["asdf", "qwer", "zxcv"],
    };
    setState({
      input: state.input,
      pokemon,
      info: state.info,
    });
  }
  return (
    <>
      <h1>Pokedex</h1>
      <SearchArea
        input={state.input}
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
