import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import { reduxObservable } from 'redux-observable';
import rootReducer from '../reducers/rootReducer';

const configureStore = () => {
    const logger = createLogger({ collapsed: true });
    const store = createStore(rootReducer, applyMiddleware(reduxObservable(), logger));
    return store;
};

export default configureStore;
