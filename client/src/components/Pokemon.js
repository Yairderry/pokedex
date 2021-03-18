import React, { Component } from "react";
import PokemonProperty from "./PokemonProperty";

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <p>{this.props.pokemon}</p>
      </li>
    );
  }
}

export default Pokemon;
