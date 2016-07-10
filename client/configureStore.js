import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { reduxObservable } from 'redux-observable';
import scoreboard from './reducers/scoreboard';

const configureStore = () => {
    const logger = createLogger({ collapsed: true });
    const store = createStore(scoreboard, applyMiddleware(reduxObservable(), logger));
    return store;
};

export default configureStore;
