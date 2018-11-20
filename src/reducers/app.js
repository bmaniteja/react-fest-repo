import APP_CONSTANTS from '../constants/app';

const initalState = {
    APP_LOADED : false,
    appLoadTime: NaN,
    petsData: []
};

export default function index (previousState=initalState, action) {
    switch(action.type) {
        case APP_CONSTANTS.APP_LOAD:
            return {
                ...previousState,
                APP_LOADED: true,
                appLoadTime: action.payload.timeTaken
            };
        case APP_CONSTANTS.FETCH_DATA:
            return {
                ...previousState,
                petsData: action.data
            }
        default: 
            return previousState;
    }
};

