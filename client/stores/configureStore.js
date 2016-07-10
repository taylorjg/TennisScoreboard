import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { reduxObservable } from 'redux-observable';
import appReducer from '../reducers/appReducer';

const configureStore = () => {
    const logger = createLogger({ collapsed: true });
    const store = createStore(appReducer, applyMiddleware(reduxObservable(), logger));
    return store;
};

export default configureStore;
