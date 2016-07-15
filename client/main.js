import React from 'react';
import { render } from 'react-dom';
import configureStore from './stores/configureStore';
import Root from './containers/root';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('content')
);
