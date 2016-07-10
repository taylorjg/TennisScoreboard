import { createStore } from 'redux';
import scoreboard from './reducers/scoreboard';

const configureStore = () => {
    const store = createStore(scoreboard);
    return store;
};

export default configureStore;
