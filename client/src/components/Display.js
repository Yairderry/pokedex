import React, { Component } from "react";
import PokemonProperty from "./PokemonProperty";

export default class Display extends Component {
  render() {
    return (
      <div>
        <ul>
          <PokemonProperty />
          <PokemonProperty />
          <PokemonProperty />
          <PokemonProperty />
        </ul>
        <img />
        <button>Catch/Release</button>
      </div>
    );
  }
}
