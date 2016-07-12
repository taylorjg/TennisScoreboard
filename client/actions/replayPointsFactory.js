import * as Rx from 'rxjs';
import * as actions from '.';
import * as types from '../constants/actionTypes';

const re = /[12]/;

const replayPointsFactory = (points, period = 500) =>
    futureAction$ => {
        const playerPointActions = points
            .split('')
            .filter(c => re.test(c))
            .map(Number)
            .map(n => (n === 1) ? actions.player1Point() : actions.player2Point());
        const action$ = Rx.Observable.of(actions.reset(), actions.startReplaying())
            .concat(Rx.Observable.from(playerPointActions))
            .concat(Rx.Observable.of(actions.endReplaying()));
        const interval$ = Rx.Observable.interval(period);
        return Rx.Observable
            .zip(action$, interval$, (action, _) => action)
            .takeUntil(futureAction$.ofType(types.CANCEL_REPLAYING));
    };

export default replayPointsFactory;
