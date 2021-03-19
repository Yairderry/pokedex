import React from "react";

export default function Pokemon({ pokemon, showPokemon }) {
  return (
    <li>
      {pokemon.img && <img src={pokemon.img} />}
      <p onClick={(e) => showPokemon(e)}>{pokemon.name}</p>
    </li>
  );
}
