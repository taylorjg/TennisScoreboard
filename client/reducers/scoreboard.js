import Player from '../models/player';
import Point from '../models/point';
import Game from '../models/game';

const initialState = {
    player1: new Player('Player 1'),
    player2: new Player('Player 2'),
    game: new Game([])
};

const scoreboard = (state = initialState, action) => {

    const addPoint = (state, player) => {
        if (state.game.isWon) return state;
        const point = new Point(player);
        return { ...state, game: new Game([...state.game.points, point]) };
    }

    switch (action.type) {
        case 'PLAYER1_POINT':
            return addPoint(state, state.player1);
        case 'PLAYER2_POINT':
            return addPoint(state, state.player2);
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export default scoreboard;
