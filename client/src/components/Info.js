import React from "react";
import Pokemon from "./Pokemon";

export default function Info({ info, showPokemon, showAnotherPage }) {
  return (
    <div>
      {info.length !== 0 && (
        <>
          <button
            onClick={() => {
              showAnotherPage(info.prev);
            }}
          >
            prev page
          </button>
          <ul>
            {info.results.map((pokemon, i) => (
              <Pokemon key={i} pokemon={pokemon} showPokemon={showPokemon} />
            ))}
          </ul>
          <button
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
