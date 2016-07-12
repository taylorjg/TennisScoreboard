import * as types from '../constants/actionTypes';
import Player from '../models/player';
import Game from '../models/game';

const initialState = {
    player1: new Player('Player 1'),
    player2: new Player('Player 2'),
    game: new Game([]),
    replaying: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PLAYER1_POINT:
            return { ...state, game: state.game.scorePoint(state.player1) };
        case types.PLAYER2_POINT:
            return { ...state, game: state.game.scorePoint(state.player2) };
        case types.RESET:
            return initialState;
        case types.START_REPLAYING:
            return { ...state, replaying: true };
        case types.END_REPLAYING:
        case types.CANCEL_REPLAYING:
            return { ...state, replaying: false };
        default:
            return state;
    }
}

export default appReducer;
