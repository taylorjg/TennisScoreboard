import { Observable } from 'rx';
import * as actions from './actions';

const re = /[12]/;

const replayPoints = points => {

    const dispatchNames = points
        .split('')
        .filter(c => re.test(c))
        .map(Number)
        .map(n => (n === 1) ? actions.player1Point.name : actions.player2Point.name);

    return Observable.from(dispatchNames)
        .startWith(actions.reset.name);
}

export default replayPoints;
