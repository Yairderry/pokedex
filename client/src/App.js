import "./App.css";
import Display from "./components/Display";
import SearchArea from "./components/SearchArea";
import Info from "./components/Info";
import { useState } from "react";

const axios = require("axios").default;

function App() {
 const [state, setState] = useState({
  error: false,
  input: "",
  pokemon: {
   Name: "",
   Height: "",
   Weight: "",
   Types: [],
   caught: false,
   img: "",
  },
  info: { next: null, prev: null, results: [] },
 });

 function search(e) {
  const input = e.target.value;
  setState({
   error: false,
   input,
   pokemon: state.pokemon,
   info: state.info,
  });
 }

 async function toggleCatchRelease() {
  try {
   const collection = (await axios.get(`/api/collection`)).data.userCollection;

   const data = state.pokemon.caught
    ? await axios.delete(`/api/collection/release/${state.pokemon.name}`)
    : await axios.post(`/api/collection/catch`, {
       name: state.pokemon.name,
      });

   const info = data.data;
   state.pokemon.caught = !state.pokemon.caught;

   if (JSON.stringify(state.info) === JSON.stringify(collection)) {
    setState({
     error: false,
     input: state.input,
     pokemon: state.pokemon,
     info,
    });
    return;
   }

   setState({
    error: false,
    input: state.input,
    pokemon: state.pokemon,
    info: state.info,
   });
  } catch {
   setState({
    error: true,
    input: state.input,
    pokemon: state.pokemon,
    info: state.info,
   });
  }
 }

 function showEveryPokemon() {
  axios
   .get(`/api/pokemon`)
   .then((data) => {
    const info = data.data;
    setState({
     error: false,
     input: state.input,
     pokemon: state.pokemon,
     info,
    });

    getPokemonImages(info);
   })
   .catch(() => {
    setState({
     error: true,
     input: state.input,
     pokemon: state.pokemon,
     info: state.info,
    });
   });
 }

 function showAnotherPage(nextOrPrev) {
  if (!nextOrPrev) return;

  axios
   .get(`/api/pokemon/${nextOrPrev}`)
   .then((data) => {
    const info = data.data;
    setState({
     error: false,
     input: state.input,
     pokemon: state.pokemon,
     info,
    });
   })
   .catch(() => {
    setState({
     error: true,
     input: state.input,
     pokemon: state.pokemon,
     info: state.info,
    });
   });
 }

 function showCollection() {
  axios
   .get(`/api/collection`)
   .then((data) => {
    const info = data.data;
    setState({
     error: false,
     input: state.input,
     pokemon: state.pokemon,
     info,
    });

    getPokemonImages(info);
   })
   .catch(() => {
    setState({
     error: true,
     input: state.input,
     pokemon: state.pokemon,
     info: state.info,
    });
   });
 }

 function getPokemonImages(info) {
  info.results.map((pokemon) => {
   axios
    .get(`/api/pokemon/${pokemon.name}`)
    .then(({ data }) => {
     const { front_default } = data.img;
     pokemon.img = front_default;
     setState({
      error: false,
      input: state.input,
      pokemon: state.pokemon,
      info,
     });
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
    setState({
     error: false,
     input: state.input,
     pokemon: state.pokemon,
     info,
    });

    getPokemonImages(info);
   })
   .catch(() => {
    setState({
     error: true,
     input: state.input,
     pokemon: state.pokemon,
     info: state.info,
    });
   });
 }

 function searchPokemon() {
  const name = state.input.toLowerCase();

  if (name === "") return;

  axios
   .get(`/api/pokemon/${name}`)
   .then((data) => {
    const pokemon = data.data;
    setState({
     error: false,
     input: state.input,
     pokemon,
     info: state.info,
    });
   })
   .catch(() => {
    setState({
     error: true,
     input: state.input,
     pokemon: state.pokemon,
     info: state.info,
    });
   });
 }

 function showPokemon(e) {
  const name = e.target.innerText;
  axios.get(`/api/pokemon/${name}`).then((data) => {
   const pokemon = data.data;
   setState({
    error: false,
    input: state.input,
    pokemon,
    info: state.info,
   });
  });
 }

 return (
  <>
   <h1 className="header">Pokedex</h1>
   <SearchArea
    search={search}
    showCollection={showCollection}
    searchPokemon={searchPokemon}
    showEveryPokemon={showEveryPokemon}
   />
   {state.error ? (
    <div>
     <img src="./sad_pikachu.gif" />
    </div>
   ) : (
    <Display
     toggleCatchRelease={toggleCatchRelease}
     pokemon={state.pokemon}
     getTypesList={getTypesList}
    />
   )}
   {state.info.length !== 0 && (
    <Info
     info={state.info}
     showPokemon={showPokemon}
     showAnotherPage={showAnotherPage}
    />
   )}
  </>
 );
}

export default App;
