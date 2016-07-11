import replayPointsFactory from './replayPointsFactory';

export const player1Point = () => ({
    type: 'PLAYER1_POINT'
});

export const player2Point = () => ({
    type: 'PLAYER2_POINT'
});

export const reset = () => ({
    type: 'RESET'
});

export const replayPoints = replayPointsFactory;

export const cancelReplay = () => ({
    type: 'CANCEL_REPLAY'
});
