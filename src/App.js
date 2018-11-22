import React, { Component } from 'react';
import logo from './logo.svg';
import {Route, Link} from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import FavouritePage from './containers/FavouritePage';
import DetailsPage from './containers/DetailsPage';

import './App.css';
// import './App.scss';

// <Route path="/details.html" component={DetailsPage}/> 


class App extends Component {
  render() {
    return (
      <div className="App">
          <Route path="/" exact component={LandingPage}/>
          <Route path="/favouroites" exact component={FavouritePage}/>
          <Route path="/details" exact component={DetailsPage}/>
      </div>
    );
  }
}

export default App;