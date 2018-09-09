import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state , action) => {
  switch(action.type){
    case  'SEARCH_WEATHER' :
    return {
      ...state,
      weather:action.payload,
      heading :'Your Searched Result'
    }
;
default :
return state ;
  }
}


export class Provider extends Component {
  state = {
    weather: [],
    heading: "Your Result" ,
    dispatch : action =>this.setState(state =>reducer(state,action))

  };

  componentDidMount() {
    // alert(process.env.KEY)
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=delhi,uk&APPID=${
      process.env.REACT_APP_KEY
    }`)

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${
          process.env.REACT_APP_KEY
        }`
      )
      .then(res => {
        // console.log(res)
        // console.log(res.data.weather[0])
        this.setState({
           weather :res.data.weather[0]

        })
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
