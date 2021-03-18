import React, { Component } from "react";
import Pokemon from "./Pokemon";
import PokemonProperty from "./PokemonProperty";

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{printProperties(this.props.pokemon)}</ul>
        <img />
        {this.props.caught ? (
          <button onClick={this.props.toggleCatchRelease}>Release</button>
        ) : (
          <button onClick={this.props.toggleCatchRelease}>Catch</button>
        )}
      </div>
    );
  }
}

function printProperties(pokemon) {
  const PropertiesList = [];
  for (let prop in pokemon) {
    PropertiesList.push(
      <PokemonProperty key={prop} prop={prop} value={pokemon[prop]} />
    );
  }
  return PropertiesList;
}
