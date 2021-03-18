import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <p onClick={this.props.searchPokemon}>{this.props.pokemon}</p>
      </li>
    );
  }
}

export default Pokemon;
