import React from "react";

export default function Type({ getTypesList, prop, type }) {
  return (
    <li>
      {prop}:
      {type.map((type, i) => (
        <span onClick={(e) => getTypesList(e)} key={i}>
          {type}
        </span>
      ))}
    </li>
  );
}
