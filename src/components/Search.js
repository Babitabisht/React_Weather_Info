import React, { Component } from "react";
import { Consumer } from "../context";
import axios from 'axios' ;

class Search extends Component {
state={
input :''
}
getInput = e =>{
//console.log(e.target.value)
  this.setState(
    
    {
    [e.target.name] : e.target.value
  })
}

findWeather = (dispatch , e ) =>{
e.preventDefault() ;
//console.log("Form submiited")



axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&APPID=${
  process.env.REACT_APP_KEY
}`) 
.then(res=>{
  //console.log("in Search")
 // console.log(res)

  dispatch({

    type:'SEARCH_WEATHER' ,
    payload :res.data.weather[0]

  })

  this.setState({
    input: ''
  })
})
.catch(err=>{
  console.log('Error occured in submossion' );

  return(
    <React.Fragment>
    
    <h1>Please Enter valid city name</h1>
    </React.Fragment>
  )
  console.log(err);
})


}

  render() {
    return (
      <Consumer>
       
       
        {value => {

          const {dispatch} = value ;
          return (
            <div className="card body">
            <p className="display-4 text-center mt-5 mb-3 ">Check the Weather of any city</p>
            <form  onSubmit ={this.findWeather.bind(this,dispatch)}>
            <div className="form-group">
            
            <input type="text" className="form-control form-control-lg"  
            placeholder="Enter City name......" value={this.state.input}
            onChange={this.getInput}
            name='input'
            />
            <button type="submit" className="btn btn-primary btn-block mt-4">Check the weather</button>
            
            
            </div>
            
            
            </form>
           
            </div>

          
          )
        }}
        
      </Consumer>
    );
  }
}

export default Search;
