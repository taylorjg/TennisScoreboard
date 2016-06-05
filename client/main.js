import React from 'react';
import { render } from 'react-dom';
import { createStore} from 'redux';
import Scoreboard from './components/Scoreboard';

const initialState = {
    player1Score: 0,
    player2Score: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'P1':
            return Object.assign({}, state, { player1Score: state.player1Score + 1 });
        case 'P2':
            return Object.assign({}, state, { player2Score: state.player2Score + 1 });
        default:
            return state;
    }
}

const store = createStore(reducer);

const onPlayer1 = () => store.dispatch({ type: 'P1' });
const onPlayer2 = () => store.dispatch({ type: 'P2' });
const contentElement = document.getElementById('content'); 
const myrender = () => render(
    <Scoreboard
        value={store.getState()}
        onPlayer1={onPlayer1}
        onPlayer2={onPlayer2} />,
    contentElement);

store.subscribe(myrender);
myrender();
