import React from "react";

export default function Pokemon({ pokemon, showPokemon }) {
  return (
    <li>
      {pokemon.img && <img src={pokemon.img} />}
      <span onClick={(e) => showPokemon(e)}>{pokemon.name}</span>
      <span>{pokemon.caught ? "✅" : "❎"}</span>
    </li>
  );
}
