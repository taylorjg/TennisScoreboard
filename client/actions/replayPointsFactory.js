import * as Rx from 'rxjs';
import * as actions from '.';

const re = /[12]/;

const replayPointsFactory = (points, period = 500) =>
    futureAction$ => {
        const playerPointActions = points
            .split('')
            .filter(c => re.test(c))
            .map(Number)
            .map(n => (n === 1) ? actions.player1Point() : actions.player2Point());
        const action$ = Rx.Observable.from(playerPointActions).startWith(actions.reset());
        const interval$ = Rx.Observable.interval(period);
        return Rx.Observable
            .zip(action$, interval$, (action, _) => action)
            .takeUntil(futureAction$.ofType('CANCEL_REPLAY'));
    };

export default replayPointsFactory;
