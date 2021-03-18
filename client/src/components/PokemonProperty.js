import React from "react";
import Type from "./Type";

export default function PokemonProperty({ prop, value, getTypesList }) {
  return (
    <>
      {prop === "types" ? (
        <Type getTypesList={getTypesList} prop={prop} type={value} />
      ) : (
        <li>
          {prop}: {value}
        </li>
      )}
    </>
  );
}
