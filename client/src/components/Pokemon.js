import React from "react";

export default function Pokemon({ pokemon, showPokemon }) {
 return (
  <li className="pokemonLi">
   {pokemon.img && <img className="img" src={pokemon.img} />}
   <div onClick={(e) => showPokemon(e)}>{pokemon.name}</div>
   <span>{pokemon.caught ? "✅" : "❎"}</span>
  </li>
 );
}
