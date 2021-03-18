import React, { Component } from "react";
import PokemonProperty from "./PokemonProperty";

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{printProperties(this.props.pokemon)}</ul>
        <img src={this.props.pokemon.img} />
        {this.props.pokemon.caught ? (
          <button>Release</button>
        ) : (
          <button>Catch</button>
        )}
      </div>
    );
  }
}

function printProperties(pokemon) {
  const PropertiesList = [];
  for (let prop in pokemon) {
    if (prop === "caught" || prop === "img") continue;
    PropertiesList.push(
      <PokemonProperty key={prop} prop={prop} value={pokemon[prop]} />
    );
  }
  return PropertiesList;
}
