import React from "react";

export default function SearchArea({
  search,
  value,
  searchPokemon,
  showCollection,
  showEveryPokemon,
}) {
  return (
    <div>
      <input onChange={search} value={value} required />
      <button onClick={(e) => searchPokemon(e)}>Search Pokemon</button>
      <button onClick={showCollection}>Show Collection</button>
      <button onClick={showEveryPokemon}>Show All Pokemon</button>
    </div>
  );
}
