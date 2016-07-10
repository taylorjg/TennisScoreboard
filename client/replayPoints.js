import { Observable } from 'rx';
import * as actions from './actions';

const re = /[12]/;

const replayPoints = (points, interval) => {

    const xs = points
        .split('')
        .filter(c => re.test(c))
        .map(Number)
        .map(n => (n === 1) ? actions.player1Point : actions.player2Point);

    const xs$ = Observable.from(xs).startWith(actions.reset).map(fn => fn.name);
    const ys$ = Observable.interval(interval);
    return Observable.zip(xs$, ys$, (x, _) => x);
}

export default replayPoints;
