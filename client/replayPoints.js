import * as Rx from 'rxjs';
import * as actions from './actions';

const re = /[12]/;

const replayPoints = (points, interval = 500) => {

    const xs = points
        .split('')
        .filter(c => re.test(c))
        .map(Number)
        .map(n => (n === 1) ? actions.player1Point : actions.player2Point);

    const xs$ = Rx.Observable.from(xs).startWith(actions.reset).map(fn => fn.name);
    const ys$ = Rx.Observable.interval(interval);
    return Rx.Observable.zip(xs$, ys$, (x, _) => x);
}

export default replayPoints;
