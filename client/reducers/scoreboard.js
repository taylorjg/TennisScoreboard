import Player from '../models/player';
import Point from '../models/point';
import Game from '../models/game';

const initialState = {
    player1: new Player('Player 1'),
    player2: new Player('Player 2'),
    game: new Game([])
};

const scoreboard = (state = initialState, action) => {
    switch (action.type) {
        case 'PLAYER1_POINT':
            {
                if (state.game.isWon) return state;
                let ps = state.game.points.slice();
                ps.push(new Point(state.player1));
                return { ...state, game: new Game(ps) };
            }
        case 'PLAYER2_POINT':
            {
                if (state.game.isWon) return state;
                let ps = state.game.points.slice();
                ps.push(new Point(state.player2));
                return { ...state, game: new Game(ps) };
            }
        case 'REPLAY_POINTS':
            return state;
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export default scoreboard;
