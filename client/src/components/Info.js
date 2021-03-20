import React from "react";
import Pokemon from "./Pokemon";

export default function Info({ info, showPokemon, showAnotherPage }) {
 return (
  <div className="infoDisplay">
   {info.results.length !== 0 && (
    <>
     <button
      className="btn"
      onClick={() => {
       showAnotherPage(info.prev);
      }}
     >
      prev page
     </button>
     <ul className="pokemonList">
      {info.results.map((pokemon, i) => (
       <Pokemon key={i} pokemon={pokemon} showPokemon={showPokemon} />
      ))}
     </ul>
     <button
      className="btn"
      onClick={() => {
       showAnotherPage(info.next);
      }}
     >
      next page
     </button>
    </>
   )}
  </div>
 );
}
