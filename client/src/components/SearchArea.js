import React from "react";

export default function SearchArea({
 search,
 value,
 searchPokemon,
 showCollection,
 showEveryPokemon,
}) {
 return (
  <div className="SearchArea">
   <input className="input" onChange={search} value={value} required />
   <button className="btn" onClick={(e) => searchPokemon(e)}>
    Search Pokemon
   </button>
   <button className="btn" onClick={showCollection}>
    Show Collection
   </button>
   <button className="btn" onClick={showEveryPokemon}>
    Show All Pokemon
   </button>
  </div>
 );
}
