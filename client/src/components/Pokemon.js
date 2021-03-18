import React from "react";

export default function Pokemon({ pokemon, showPokemon }) {
  return (
    <li>
      <p onClick={(e) => showPokemon(e)}>{pokemon}</p>
    </li>
  );
}
