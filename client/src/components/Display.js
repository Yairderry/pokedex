import React, { useEffect } from "react";
import PokemonProperty from "./PokemonProperty";

export default function Display({ getTypesList, pokemon, toggleCatchRelease }) {
  function printProperties(pokemon) {
    const propertiesList = [];
    for (let prop in pokemon) {
      if (prop === "caught" || prop === "img") continue;
      propertiesList.push(
        <PokemonProperty
          key={prop}
          prop={prop}
          value={pokemon[prop]}
          getTypesList={getTypesList}
        />
      );
    }
    return propertiesList;
  }

  useEffect(() => {
    if (pokemon.name !== "") {
      const text = `name: ${pokemon.name}, height: ${pokemon.height}, weight: ${
        pokemon.weight
      }, types: ${pokemon.types.join(", ")}`;
      const utter = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utter);
    }
    return () => {
      speechSynthesis.cancel();
    };
  }, [pokemon.name]);

  return (
    <>
      <div className="displayPokemon">
        <ul className="properties">{printProperties(pokemon)}</ul>
        {pokemon.img.front_default && (
          <img
            className="img"
            src={pokemon.img.front_default}
            onMouseOver={(e) =>
              (e.currentTarget.src = pokemon.img.back_default)
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = pokemon.img.front_default)
            }
          />
        )}
        {!pokemon.name ? null : pokemon.caught ? (
          <button
            className="btn"
            id="catchRelease"
            onClick={toggleCatchRelease}
          >
            Release
          </button>
        ) : (
          <button
            className="btn"
            id="catchRelease"
            onClick={toggleCatchRelease}
          >
            Catch
          </button>
        )}
      </div>
    </>
  );
}
