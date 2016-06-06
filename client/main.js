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
        case 'PLAYER1_POINT':
            return { ...state, player1Score: state.player1Score + 1};
        case 'PLAYER2_POINT':
            return { ...state, player2Score: state.player2Score + 1};
        default:
            return state;
    }
}

const store = createStore(reducer);

const onPlayer1 = () => store.dispatch({ type: 'PLAYER1_POINT' });
const onPlayer2 = () => store.dispatch({ type: 'PLAYER2_POINT' });
const contentElement = document.getElementById('content'); 
const myrender = () => render(
    <Scoreboard
        value={store.getState()}
        onPlayer1={onPlayer1}
        onPlayer2={onPlayer2} />,
    contentElement);

store.subscribe(myrender);
myrender();
