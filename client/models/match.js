import Player from './player';
import Point from './point';
import Game from './game';

class Match {
    constructor(streams, player1, player2, game) {
        this.streams = streams;
        this.player1 = player1;
        this.player2 = player2;
        this.currentGame = game || new Game(streams);
    }
    scorePoint(player) {
        if (this.currentGame.isWon) return this;
        const newPoint = new Point(player);
        const newGame = new Game(this.streams, [...this.currentGame.points, newPoint]);
        const newMatch = new Match(this.streams, this.player1, this.player2, newGame);
        this.streams.pointWon$.next(newPoint);
        return newMatch;
    }
}

export default Match;
