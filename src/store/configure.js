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
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combinerRootReducer, composeEnhancers(applyMiddleware(...middleware)));

    return store;
}
