import React from "react";
import Pokemon from "./Pokemon";

export default function Info({ info, showPokemon }) {
  return (
    <div>
      <ul>
        {info.map((pokemon, i) => (
          <Pokemon key={i} pokemon={pokemon} showPokemon={showPokemon} />
        ))}
      </ul>
    </div>
  );
}
