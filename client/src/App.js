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

  return (
    <>
      <h1>Pokedex</h1>
      <SearchArea input={state.input} />
      <Display caught={state.caught} pokemon={state.pokemon} />
      {state.info.length !== 0 && <Info info={state.info} />}
    </>
  );
}

export default App;
