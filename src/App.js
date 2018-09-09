import React, { Component } from "react";
import { render } from 'react-dom'
import {Navbar} from './components/Navbar' ;
import {Footer} from './components/Footer' ;

import { Provider } from "./context";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Index } from "./components/Index";
import "./App.css";

class App extends Component {
  componentDidMount(){
    console.log(process.env.REACT_APP_KEY)
  }
  render() {
    return (
      <Provider>
      <Navbar />
        <Router>
          <React.Fragment>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
        <Footer />
      </Provider>
    );
  }
}

export default App;

// <Router>
// <React.Fragment>
//   <div className="container">
//     <Switch>
//       <Route exact path="/" component={Index} />
//     </Switch>
//   </div>
// </React.Fragment>
// </Router>
