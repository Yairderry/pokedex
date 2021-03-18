import React, { Component } from "react";
import PokemonProperty from "./PokemonProperty";

export default class Type extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        {this.props.prop}:
        {this.props.type.map((type, i) => (
          <span key={i}>{type}</span>
        ))}
      </li>
    );
  }
}
