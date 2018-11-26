import APP_ACTIONS from '../constants/app';

export const appLoaded = (timeTaken) => {
    // I can do something here
    // May be an Ajax Call
    return {
        type: APP_ACTIONS.APP_LOAD,
        payload: {
            timeTaken 
        }
    };
}
