import React, { Component } from "react";
import Pokemon from "./Pokemon";

export default class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.info.map((pokemon, i) => (
            <Pokemon key={i} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    );
  }
}
