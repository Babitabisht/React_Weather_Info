import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    weather: [],
    heading: "Your Result"
  };

  componentDidMount() {
    console.log(process.env.REACT_APP_KEY);
    // alert(process.env.KEY)

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res => {
        console.log(res);
        console.log(res.data.weather[0].description);
      })
      .catch(err => {
        console.log(err);
      });
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
