import APP_CONSTANTS from '../constants/app';

const initalState = {
    APP_LOADED : false,
    appLoadTime: NaN
};

export default function index (previousState=initalState, action) {
    switch(action.type) {
        case APP_CONSTANTS.APP_LOAD:
            return {
                ...previousState,
                APP_LOADED: true,
                appLoadTime: action.payload.timeTaken
            };
        default: 
            return previousState;
    }
};

