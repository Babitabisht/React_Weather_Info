import React, { Component } from "react";
import { Consumer } from "../context";

class Search extends Component {
  render() {
    return (
      <Consumer>
       
       
        {value => {
          return (
            <div className="card body">
            <p className="display-4 text-center">Check the Weather of any city</p>
            <form >
            <div className="form-group">
            
            <input type="text" className="form-control form-control-lg"  
            placeholder="Enter City name......"
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
