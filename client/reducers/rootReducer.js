import * as types from '../constants/actionTypes';
import Player from '../models/player';
import Match from '../models/match';
import Streams from '../models/streams';
import CurrentServer from '../addins/currentServer';
import Breakpoints from '../addins/breakpoints';

const streams = new Streams();
const player1 = new Player('Player 1');
const player2 = new Player('Player 2');

const initialState = {
    match: new Match(streams, player1, player2),
    replaying: false
};

const currentServer = new CurrentServer(player1, player2, streams);
const breakpoints = new Breakpoints(player1, player2, streams, currentServer.currentServer$);

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PLAYER1_POINT:
            return { ...state, match: state.match.scorePoint(player1) };
        case types.PLAYER2_POINT:
            return { ...state, match: state.match.scorePoint(player2) };
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

export default rootReducer;
