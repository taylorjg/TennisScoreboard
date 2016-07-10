const player1Point = () => ({
    type: 'PLAYER1_POINT'
});

const player2Point = () => ({
    type: 'PLAYER2_POINT'
});

const replayPoints = (points) => ({
    type: 'REPLAY_POINTS',
    points
});

const reset = () => ({
    type: 'RESET'
});

export default {
    player1Point,
    player2Point,
    replayPoints,
    reset
};
