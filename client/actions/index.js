import * as types from '../constants/actionTypes';
import replayPointsFactory from './replayPointsFactory';

export const player1Point = () => ({
    type: types.PLAYER1_POINT
});

export const player2Point = () => ({
    type: types.PLAYER2_POINT
});

export const reset = () => ({
    type: types.RESET
});

export const replayPoints = replayPointsFactory;

export const startReplaying = () => ({
    type: types.START_REPLAYING
});

export const endReplaying = () => ({
    type: types.END_REPLAYING
});

export const cancelReplaying = () => ({
    type: types.CANCEL_REPLAYING
});
