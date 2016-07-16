function formatGamePoints(state) {

    const BLANK = '';
    const LOVE_TEXT = '0';
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

    let player1SetsText = BLANK;
    let player1GamesText = BLANK;
    let player1PointsText = BLANK;
    let player2SetsText = BLANK;
    let player2GamesText = BLANK;
    let player2PointsText = BLANK;

    const match = state.match;

    if (match.currentGame.isWon) {
        if (match.currentGame.winner === match.player1) {
            player1GamesText = "1";
        }
        else {
            player2GamesText = "1";
        }
    }
    else {
        const player1Points = match.currentGame.pointsFor(match.player1).length;
        const player2Points = match.currentGame.pointsFor(match.player2).length;

        if (player1Points + player2Points >= 6) {
            if (player1Points === player2Points) {
                player1PointsText = FORTY_TEXT;
                player2PointsText = FORTY_TEXT;
            }
            else {
                player1PointsText = player1Points > player2Points ? ADVANTAGE_TEXT : BLANK;
                player2PointsText = player2Points > player1Points ? ADVANTAGE_TEXT : BLANK;
            }
        }
        else {
            if (player1Points + player2Points > 0) {
                player1PointsText = POINTS_TO_TEXT[player1Points];
                player2PointsText = POINTS_TO_TEXT[player2Points];
            }
        }
    }

    return {
        scoreboard: {
            player1SetsText,
            player1GamesText,
            player1PointsText,
            player2SetsText,
            player2GamesText,
            player2PointsText
        },
        ui: {
            replaying: state.replaying
        }
    };
}

export default {
    formatGamePoints: formatGamePoints
};
