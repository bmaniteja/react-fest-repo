import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import './App.scss';
import MainHeader from './components/containers/Header';
import AppHome from './components/containers/Home';
import PetsPage from './components/containers/Pets';

class App extends Component {

	render() {
		return (
			<div className="App">
				<Router>
					<React.Fragment>
						<MainHeader />
						<Route path="/" exact component={AppHome} />
						<Route path="/pets/:type" exact component={PetsPage} />
					</React.Fragment>
				</Router>
			</div>
		);
	}
}

export default App;
