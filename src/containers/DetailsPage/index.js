import React from "react";
// import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  DisplayCard
} from "../../components";

import "./index.scss";
import apiUrls from '../../api/urls';
import _ from 'lodash';

import {fetchAllData, postData} from '../../actions/app'
import APP_ACTIONS from '../../constants/app';

class DetailsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      petNo: 0
    };
    this.updateFavourite = this.updateFavourite.bind(this);
    this.getParamsFromLocation = this.getParamsFromLocation.bind(this);
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {

  // }

  componentDidMount() {
    // Executed post render for the first time
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Executed post render 
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return false to not render when any state is changed. Default return is true
  // }

  componentDidCatch(error, info){
    // executed if any error occurs
  }

  componentWillMount(){
    this.getParamsFromLocation();
    this.props.fetchAllData({apiUrl: apiUrls.petsData, type: APP_ACTIONS.FETCH_DATA});
  }

  getParamsFromLocation(){
    let obj = {};
    _.map(this.props.location.search.replace("?","").split("&"), (v) => {
      let x = v.split("=");
      obj[x[0]] = x[1];
    });
    console.log(obj);
    this.setState({
      ...obj
    })
  }

  updateFavourite(idx, data){
    let {petsData} = this.props;
    const {petNo} = this.state;
    petsData[petNo].isFavourite = !petsData[petNo].isFavourite;

    this.props.postData({apiUrl: apiUrls.updateFavourite, type: APP_ACTIONS.FETCH_DATA, data: petsData});
  }

  render() {
    let {petsData} = this.props;
    let {petNo} = this.state;
    if(!petsData || !petsData[petNo]){
      petsData = [{}];
      petNo = 0;
    }
    const {name, imageUrl, category, isFavourite, description} = petsData[petNo];
    return (
      <div className="details-page">
        <div className="image-container">
          <img src={imageUrl} className="display-image col-md-6" />
        </div>
        <div className="display-card">
            <div className="card">
                <span className={isFavourite ? 'star book-marked' : 'star star-icon'} onClick={this.updateFavourite}></span>
                <h1>{name}</h1>
                <p className="description">
                  {description}
                </p>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({app}) => {
  return {
    petsData: app.petsData 
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllData,
  postData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage)