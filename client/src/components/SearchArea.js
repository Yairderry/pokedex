import React, { Component } from "react";

export default class SearchArea extends Component {
  render() {
    return (
      <div>
        <input />
        <button onClick={this.props.searchPokemon}>Search Pokemon</button>
        <button onClick={this.props.showCollection}>Show Collection</button>
      </div>
    );
  }
}
