import React from 'react';
import { render } from 'react-dom';
import { createStore} from 'redux';
import scoreboard from './reducers/scoreboard';
import Root from './components/root';

const store = createStore(scoreboard);

render(
    <Root store={store} />,
    document.getElementById('content')
);
