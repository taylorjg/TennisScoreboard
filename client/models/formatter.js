function formatGamePoints(state) {

    const LOVE_TEXT = '';
    const FIFTEEN_TEXT = '15';
    const THIRTY_TEXT = '30';
    const FORTY_TEXT = '40';
    const ADVANTAGE_TEXT = 'AD';

    const POINTS_TO_TEXT = [
        LOVE_TEXT,
        FIFTEEN_TEXT,
        THIRTY_TEXT,
        FORTY_TEXT
    ];

    const player1Points = state.player1Score;
    const player2Points = state.player2Score;
    // const player1Points = state.game.pointsFor(state.player1);
    // const player2Points = state.game.pointsFor(state.player2);

    let player1PointsText = '';
    let player2PointsText = '';

    if (player1Points + player2Points >= 6) {
        if (player1Points === player2Points) {
            player1PointsText = FORTY_TEXT;
            player2PointsText = FORTY_TEXT;
        }
        else {
            player1PointsText = player1Points > player2Points ? ADVANTAGE_TEXT : '';
            player2PointsText = player2Points > player1Points ? ADVANTAGE_TEXT : '';
        }
    }
    else {
        player1PointsText = POINTS_TO_TEXT[player1Points];
        player2PointsText = POINTS_TO_TEXT[player2Points];
    }

    return {
        player1PointsText: player1PointsText,
        player2PointsText: player2PointsText
    };
}

export default {
    formatGamePoints: formatGamePoints
};
