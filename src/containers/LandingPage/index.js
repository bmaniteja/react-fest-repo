import React from "react";
// import { push } from 'connected-react-router'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import {
  DisplayCard
} from "../../components";

import "./index.scss";
import apiUrls from '../../api/urls';
import _ from 'lodash';

export default class LandingPage extends React.Component {
  constructor(props){
    super(props);
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {

  // }

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

  componentWillMount(){
    // this.props.fetchAllData({apiUrl: apiUrls.petsData, type: FETCH_DATA});
  }

  render() {
      return (
        <div className="landing-page">
         { 
            _.map([{
                    "name": "Snoopy",
                    "category": "dog",
                    "imageUrl": ""
                  }], (data) => {
               return <DisplayCard data={data} />;
             })
          }
        </div>
      );
  }
}

// const mapStateToProps = ({ pets }) => ({
//   petsData: pets.pets
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//   fetchAllData
// }, dispatch)

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LandingPage)