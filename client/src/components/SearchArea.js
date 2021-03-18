import React, { Component } from "react";

export default class SearchArea extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.search} value={this.props.value} required />
        <button onClick={(e) => this.props.searchPokemon(e)}>
          Search Pokemon
        </button>
        <button onClick={this.props.showCollection}>Show Collection</button>
      </div>
    );
  }
}
