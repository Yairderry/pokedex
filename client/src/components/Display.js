import React from "react";
import PokemonProperty from "./PokemonProperty";

export default function Display({ getTypesList, pokemon, toggleCatchRelease }) {
  function printProperties(pokemon) {
    const PropertiesList = [];
    for (let prop in pokemon) {
      if (prop === "caught" || prop === "img") continue;
      PropertiesList.push(
        <PokemonProperty
          key={prop}
          prop={prop}
          value={pokemon[prop]}
          getTypesList={getTypesList}
        />
      );
    }
    return PropertiesList;
  }

  return (
    <div>
      <ul>{printProperties(pokemon)}</ul>
      <img
        src={pokemon.img.front_default}
        onMouseOver={(e) => (e.currentTarget.src = pokemon.img.back_default)}
        onMouseOut={(e) => (e.currentTarget.src = pokemon.img.front_default)}
      />
      {!pokemon.name ? null : pokemon.caught ? (
        <button onClick={toggleCatchRelease}>Release</button>
      ) : (
        <button onClick={toggleCatchRelease}>Catch</button>
      )}
    </div>
  );
}
