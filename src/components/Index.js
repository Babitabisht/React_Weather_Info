import React, { Component } from 'react' ;
import Search from './Search' ;
import Result from './Result' ;

export class Index extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <React.Fragment>
           
            <Search />
            <Result />
            </React.Fragment>
           
         );
    }
}
 
export default Index;