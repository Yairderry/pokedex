import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <p onClick={(e) => this.props.showPokemon(e)}>{this.props.pokemon}</p>
      </li>
    );
  }
}

export default Pokemon;
