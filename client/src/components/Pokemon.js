import React from "react";

export default function Pokemon({ pokemon, showPokemon }) {
 return (
  <li className="pokemonLi">
   {pokemon.img && <img className="img" src={pokemon.img} />}
   <div onClick={(e) => showPokemon(e)}>{pokemon.name}</div>
   {pokemon.caught ? (
    <div className="caught">caught</div>
   ) : (
    <div className="free"></div>
   )}
   {/* <span>{pokemon.caught ? "✅" : "❎"}</span> */}
  </li>
 );
}
