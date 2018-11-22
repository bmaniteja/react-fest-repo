import React from 'react'

import './index.scss';

export default class DisplayCard extends React.Component {

    constructor(props) {
        super(props);
        this.bookMarkItem = this.bookMarkItem.bind(this);
    }

    bookMarkItem(e){
        e.stopPropagation();
        this.props.updateFavourite(this.props.idx, this.props.data);
    }
    
    render() {
    	const {name, imageUrl, category, isFavourite} = this.props.data;
        return (
            <div className="display-card col-md-3">
                <div className="card">
                    <span className={isFavourite ? 'star book-marked' : 'star star-icon'} onClick={this.bookMarkItem}></span>
                	<h1>{name}</h1>
                	<img src={imageUrl} className="display-image" onClick={() => window.location = ('/details?petNo='+this.props.idx)} />
                	<div>
                		<span>Category: </span>
                		<span>{category}</span>
                	</div>
                </div>
            </div>
        )
    }
}