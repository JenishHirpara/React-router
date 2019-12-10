import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Error from './Components/Error.js';
import Nav from './Components/Nav.js';
import Description from './Components/Description.js';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:id/:cost" component={Description} />
          <Route component={Error}  />
        </Switch> 
      </BrowserRouter>
    );
  }
}

export default App;
