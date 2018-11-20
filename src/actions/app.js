import APP_ACTIONS from '../constants/app';
import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const appLoaded = (timeTaken) => {
    return {
        type: APP_ACTIONS.APP_LOAD,
        payload: {
            timeTaken 
        }
    };
}

export const fetchAllData = ({apiUrl, type, data}) => {
    return (dispatch) => {
        if(apiUrl){
            return axios.get(baseUrl+apiUrl, {
                params: {
                    // resPath: window.location.pathname.replace('.html', '')
                }
            }).then(response => {
                    dispatch(fetchData(type, response.data));
                })
                .catch(error => {
                throw(error);
                });
        }else {
            dispatch(fetchData(type, data));
        }
    };
};

export const postData = ({apiUrl, type, data}) => {
    return (dispatch) => {
        return axios({
        	method: 'post',
        	url: baseUrl+apiUrl,
        	data: data
        }).then(response => {
                dispatch(fetchData(type, response.data));
            })
            .catch(error => {
            throw(error);
            });
    };
};

export const fetchData = (type, data) => {
    return {
      type, data
    }
};