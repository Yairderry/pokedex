import "./App.css";
import Display from "./components/Display";
import SearchArea from "./components/SearchArea";
import Info from "./components/Info";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    input: "",
    pokemon: {
      Name: "",
      Height: "",
      Weight: "",
      Types: [],
    },
    caught: false,
    img: "",
    info: [],
  });

  function toggleCatchRelease() {
    setState({
      input: state.input,
      pokemon: state.pokemon,
      caught: !state.caught,
      img: state.img,
      info: state.info,
    });
  }

  function showCollection() {
    const info = ["My 1st Pokemon", "My 2nd Pokemon", "My 3rd Pokemon"];
    setState({
      input: state.input,
      pokemon: state.pokemon,
      caught: state.caught,
      img: state.img,
      info,
    });
  }

  function searchPokemon() {
    const pokemon = {
      Name: "Moran",
      Height: "123",
      Weight: "321",
      Types: ["one", "two"],
    };

    setState({
      input: state.input,
      pokemon,
      caught: state.caught,
      img: state.img,
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
      <Display
        caught={state.caught}
        pokemon={state.pokemon}
        toggleCatchRelease={toggleCatchRelease}
      />
      {state.info.length !== 0 && (
        <Info info={state.info} searchPokemon={searchPokemon} />
      )}
    </>
  );
}

export default App;
