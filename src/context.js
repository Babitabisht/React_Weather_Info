import React, { Component } from "react";
import axios from 'axios' ;


const Context = React.createContext();

export class Provider extends Component {
  state = {
    weather :[],
    heading: "Your Result",
   
  };

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2979bb26687558833a57d1b747ee37fa`)
    .then(res=>{
 console.log(res) 
 console.log(res.data.weather[0].description) 
    })
    .catch(err=>{

      console.log(err)
    })

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
