import React, { Component } from "react";

export default class Type extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.prop}:
        {this.props.type.map((type, i) => (
          <span onClick={(e) => this.props.getTypesList(e)} key={i}>
            {type}
          </span>
        ))}
      </li>
    );
  }
}
