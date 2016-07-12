import Player from './player';
import Point from './point';

class Game {
    constructor(points) {
        this.points = points;
    }
    pointsFor(player) {
        return this.points.filter(p => p.winner === player);
    }
    get winner() {
        return calculateWinner(this.points, 4);
    }
    get isWon() {
        return this.winner !== null;
    }
    scorePoint(player) {
        if (this.isWon) return this;
        const point = new Point(player);
        return new Game([...this.points, point]);
    }
}

function partitionPoints(points) {
    const seed = {
        xs: [],
        ys: [],
        init: true
    };
    return points.reduce(
        (acc, p) => {
            let arr;
            if (acc.init) {
                acc.init = false;
                arr = acc.xs;
            }
            else {
                arr = (acc.xs[0].winner === p.winner) ? acc.xs : acc.ys;
            }
            arr.push(p);
            return acc;
        },
        seed);
}

function calculateWinner(points, minPointsToWin) {
    const {xs, ys} = partitionPoints(points);
    const xslen = xs.length;
    const yslen = ys.length;
    if (xslen >= minPointsToWin && xslen - yslen >= 2) {
        return xs[0].winner;
    }
    if (yslen >= minPointsToWin && yslen - xslen >= 2) {
        return ys[0].winner;
    }
    return null;
};

export default Game;
