import React, { Component } from "react";
import { Consumer } from "../context";

class Search extends Component {
state={
input :''
}
getInput = e =>{
console.log(e.target.name)
console.log(e.target.value)
  this.setState(
    
    {
    [e.target.name] : e.target.value
  })
}



  render() {
    return (
      <Consumer>
       
       
        {value => {
          return (
            <div className="card body">
            <p className="display-4 text-center mt-5 mb-3 ">Check the Weather of any city</p>
            <form >
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
