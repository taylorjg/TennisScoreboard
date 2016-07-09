import React from 'react';
import { render } from 'react-dom';
import { createStore} from 'redux';
import { connect, Provider } from 'react-redux';
import Scoreboard from './components/Scoreboard';

const initialState = {
    player1Score: 0,
    player2Score: 0,
    player1PointsText: '',
    player2PointsText: ''
};

function formatGamePoints(state) {

    const LOVE_TEXT = '';
    const FIFTEEN_TEXT = '15';
    const THIRTY_TEXT = '30';
    const FORTY_TEXT = '40';
    const ADVANTAGE_TEXT = 'AD';

    const POINTS_TO_TEXT = [
        LOVE_TEXT,
        FIFTEEN_TEXT,
        THIRTY_TEXT,
        FORTY_TEXT
    ];

    let player1PointsText = '';
    let player2PointsText = '';

    if (state.player1Score + state.player2Score >= 6) {
        if (state.player1Score === state.player2Score) {
            player1PointsText = FORTY_TEXT;
            player2PointsText = FORTY_TEXT;
        }
        else {
            player1PointsText = state.player1Score > state.player2Score ? ADVANTAGE_TEXT : '';
            player2PointsText = state.player2Score > state.player1Score ? ADVANTAGE_TEXT : '';
        }
    }
    else {
        player1PointsText = POINTS_TO_TEXT[state.player1Score];
        player2PointsText = POINTS_TO_TEXT[state.player2Score];
    }

    return {
        player1PointsText: player1PointsText,
        player2PointsText: player2PointsText
    };
}

const scoreboardApp = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAYER1_POINT':
            return { ...state, player1Score: state.player1Score + 1 };
        case 'PLAYER2_POINT':
            return { ...state, player2Score: state.player2Score + 1 };
        case 'REPLAY_POINTS':
            console.log(`REPLAY_POINTS points: ${action.points}`);
            return state;
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const mapStateToProps = formatGamePoints;

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
