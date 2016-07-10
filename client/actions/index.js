export const player1Point = () => ({
    type: 'PLAYER1_POINT'
});

export const player2Point = () => ({
    type: 'PLAYER2_POINT'
});

export const replayPoints = (points) => ({
    type: 'REPLAY_POINTS',
    points
});

export const reset = () => ({
    type: 'RESET'
});
