import React, { Component } from 'react' ;
import Search from './Search' ;

export class Index extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <React.Fragment>
            <h1>You are in index Page</h1>
            <Search />
            </React.Fragment>
           
         );
    }
}
 
export default Index;