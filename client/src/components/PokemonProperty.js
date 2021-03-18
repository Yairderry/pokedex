import React, { Component } from "react";
import Type from "./Type";

class PokemonProperty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.prop === "types" ? (
          <Type
            getTypesList={this.props.getTypesList}
            prop={this.props.prop}
            type={this.props.value}
          />
        ) : (
          <li>
            {this.props.prop}: {this.props.value}
          </li>
        )}
      </>
    );
  }
}

export default PokemonProperty;
