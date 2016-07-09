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
    player1: new Player('Player 1'),
    player2: new Player('Player 2'),
    game: new Game([])
};

const scoreboardApp = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAYER1_POINT':
            {
                let ps = state.game.points.slice();
                ps.push(new Point(state.player1));
                return { ...state, game: new Game(ps) };
            }
        case 'PLAYER2_POINT':
            {
                let ps = state.game.points.slice();
                ps.push(new Point(state.player2));
                return { ...state, game: new Game(ps) };
            }
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
