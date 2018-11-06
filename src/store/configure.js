import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import * as rootReducer from '../reducers';

const combinerRootReducer = combineReducers({
    ...rootReducer
});

/**
 * @description Configures store with all the reducers
 * @returns {object} creates and returns store
 */
export default function configureStore() {
    const { logger } = require('redux-logger');
    const middleware = [thunk, logger];
    const store = createStore(combinerRootReducer, compose(applyMiddleware(...middleware)));

    return store;
}
