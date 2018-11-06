import APP_ACTIONS from '../constants/app';

export const appLoaded = (timeTaken) => {
    return {
        type: APP_ACTIONS.APP_LOAD,
        payload: {
            timeTaken 
        }
    };
}