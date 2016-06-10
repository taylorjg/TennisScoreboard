import React from 'react';
import { render } from 'react-dom';
import { createStore} from 'redux';
import { connect, Provider } from 'react-redux';
import Scoreboard from './components/Scoreboard';

const initialState = {
    player1Score: 0,
    player2Score: 0
};

const scoreboardApp = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAYER1_POINT':
            return { ...state, player1Score: state.player1Score + 1 };
        case 'PLAYER2_POINT':
            return { ...state, player2Score: state.player2Score + 1 };
        case 'REPLAY_POINTS':
            console.log('REPLAY_POINTS - points: %s', action.points);
            return state;
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    onPlayer1Point: () => dispatch({ type: 'PLAYER1_POINT' }),
    onPlayer2Point: () => dispatch({ type: 'PLAYER2_POINT' }),
    onReplayPoints: points => dispatch({ type: 'REPLAY_POINTS', points }),
    onReset: () => dispatch({ type: 'RESET' })
});

const ScoreboardContainer = connect(mapStateToProps, mapDispatchToProps)(Scoreboard);

render(
    <Provider store={createStore(scoreboardApp)}>
        <ScoreboardContainer />
    </Provider>,
    document.getElementById('content')
);
