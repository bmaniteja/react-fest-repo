import React, { Component } from 'react';
import './index.scss'

export default class DemoPage extends Component {
	constructor(props){
		super(props);
		this.state = {
		};
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {

	}

	componentDidMount() {
		// Executed post render for the first time
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// Executed post render 
	}

	shouldComponentUpdate(nextProps, nextState) {
		// return false to not render when any state is changed. Default return is true
	}

	componentDidCatch(error, info){
		// executed if any error occurs
	}

	render() {
	    return (
	    	<div className="container">
	    		<h1>Base Container!</h1>
	    		<div className="row">
		    		<div className="col-md-6 col-12">Test Div tag 1</div>
		    		<div className="col-md-6 col-12">Test Div tag 2</div>
	    		</div>
	    	</div>
	    )
	}
}

