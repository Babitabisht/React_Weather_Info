import React, { Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    heading: "Your Result",
    weather: []
  };

  componentDidMount() {
  
  }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}

export const Consumer = Context.Consumer;
