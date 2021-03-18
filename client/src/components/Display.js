import React, { Component } from "react";
import PokemonProperty from "./PokemonProperty";

export default class Display extends Component {
  constructor(props) {
    super(props);
  }

  printProperties(pokemon) {
    const PropertiesList = [];
    for (let prop in pokemon) {
      if (prop === "caught" || prop === "img") continue;
      PropertiesList.push(
        <PokemonProperty
          key={prop}
          prop={prop}
          value={pokemon[prop]}
          getTypesList={this.props.getTypesList}
        />
      );
    }
    return PropertiesList;
  }

  render() {
    return (
      <div>
        <ul>{this.printProperties(this.props.pokemon)}</ul>
        <img
          src={(this.src = this.props.pokemon.img.front_default)}
          onMouseOver={(e) =>
            (e.currentTarget.src = this.props.pokemon.img.back_default)
          }
          onMouseOut={(e) =>
            (e.currentTarget.src = this.props.pokemon.img.front_default)
          }
        />
        {this.props.pokemon.caught ? (
          <button onClick={this.props.toggleCatchRelease}>Release</button>
        ) : (
          <button onClick={this.props.toggleCatchRelease}>Catch</button>
        )}
      </div>
    );
  }
}
