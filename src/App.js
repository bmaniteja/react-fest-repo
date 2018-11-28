import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';

import store from './store';
import './App.scss';
import MainHeader from './components/containers/Header';
import AppHome from './components/containers/Home';
import PetsPage from './components/containers/Pets';
import PetDetailsPage from './components/containers/Pet';



class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Router>
						<React.Fragment>
							<MainHeader />
							<Route path="/" exact component={AppHome} />
							<Route path="/pets/:type" exact component={PetsPage} />
							<Route path="/pet/:type/:id" exact component={PetDetailsPage} />
						</React.Fragment>
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
