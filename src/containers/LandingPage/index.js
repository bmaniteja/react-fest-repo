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

class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.updateFavourite = this.updateFavourite.bind(this);
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
    this.props.fetchAllData({apiUrl: apiUrls.petsData, type: APP_ACTIONS.FETCH_DATA});
  }

  updateFavourite(idx, data){
    let {petsData} = this.props;
    data.isFavourite = !data.isFavourite;
    petsData[idx] = data;

    this.props.postData({apiUrl: apiUrls.updateFavourite, type: APP_ACTIONS.FETCH_DATA, data: petsData});
  }

  render() {
    const {petsData} = this.props;
      return (
        <div className="landing-page">
          <div className="col-md-3">
            <button className="col-md-12"><a href="/favouroites">View Favourites</a></button>
          </div>
          <div className="col-md-9">
            { 
              _.map(petsData, (data, k) => {
                 return <DisplayCard data={data} key={k} updateFavourite={this.updateFavourite} idx={k}/>;
               })
            }
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
)(LandingPage)