import React from "react";
import Pokemon from "./Pokemon";

export default function Info({ info, showPokemon }) {
  return (
    <div>
      {info.length !== 0 && (
        <>
          <button>prev page</button>
          <ul>
            {info.results.map((pokemon, i) => (
              <Pokemon key={i} pokemon={pokemon} showPokemon={showPokemon} />
            ))}
          </ul>
          <button>next page</button>
        </>
      )}
    </div>
  );
}
