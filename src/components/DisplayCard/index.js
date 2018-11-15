import React from 'react'

import './index.scss';

export default class DisplayCard extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
    	// alert(this.props);
    	const {name, imageUrl, category} = this.props.data;
        return (
            <div className="display-card">
            	<h1>{name}</h1>
            	<img src="https://smedia2.intoday.in/lallantop/wp-content/uploads/2016/05/cute-dog_160516-023453.jpg" className="display-image" />
            	<div>
            		<span>Category</span>
            		<span>{category}</span>
            	</div>
            </div>
        )
    }
}