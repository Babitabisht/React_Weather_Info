import React, { Component } from "react";
import { Consumer } from "../context";

class Search extends Component {
  state = {};
  render() {
    return (
      <Consumer>
        <h1>Search</h1>
        {value => {
          <h1>This is state value = {value.heading} </h1>;
        }}
      </Consumer>
    );
  }
}

export default Search;
