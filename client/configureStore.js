import { createStore } from 'redux';
import scoreboard from './reducers/scoreboard';

const addLoggingToDispatch = store => {
    const rawDispatch = store.dispatch;
    if (!console.group) {
        return rawDispatch;
    }

    return action => {
        console.groupCollapsed(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    };
};

const configureStore = () => {
    const store = createStore(scoreboard);
    store.dispatch = addLoggingToDispatch(store);
    return store;
};

export default configureStore;
