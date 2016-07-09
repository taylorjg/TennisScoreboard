import React from 'react';
import { render } from 'react-dom';
import { createStore} from 'redux';
import { connect, Provider } from 'react-redux';
import Scoreboard from './components/Scoreboard';
import Player from './models/player';
import Point from './models/point';
import Game from './models/game';
import formatter from './models/formatter';

const initialState = {
    player1Score: 0,
    player2Score: 0,
    player1: new Player('Player 1'),
    player2: new Player('Player 2'),
    game: new Game([])
};

const player1 = new Player('player1');
const player2 = new Player('player2');
const p1 = new Point(player1);
const p2 = new Point(player2);
const p3 = new Point(player1);
const p4 = new Point(player1);
const p5 = new Point(player1);
const g1 = new Game([p1, p2, p3, p4, p5]);
console.log(`g1.points: ${JSON.stringify(g1.points)}`);
console.log(`g1.pointsFor(player1): ${JSON.stringify(g1.pointsFor(player1))}`);
console.log(`g1.pointsFor(player2): ${JSON.stringify(g1.pointsFor(player2))}`);
console.log(`g1.isWon: ${g1.isWon}`);
console.log(`g1.winner: ${JSON.stringify(g1.winner)}`);

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

const mapStateToProps = formatter.formatGamePoints;

const mapDispatchToProps = dispatch => ({
    onPlayer1Point: () => dispatch({ type: 'PLAYER1_POINT' }),
    onPlayer2Point: () => dispatch({ type: 'PLAYER2_POINT' }),
    onReplayPoints: points => dispatch({ type: 'REPLAY_POINTS', points }),
    onReset: () => dispatch({ type: 'RESET' })
});

const ScoreboardContainer = connect(mapStateToProps, mapDispatchToProps)(Scoreboard);

render(
    <Provider store={createStore(scoreboardApp) }>
        <ScoreboardContainer />
    </Provider>,
    document.getElementById('content')
);
