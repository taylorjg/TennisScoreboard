import { Observable } from 'rx';

const replayPoints = points => {

    const dispatchNames = points
        .split('')
        .filter(c => /^\d$/.test(c))
        .map(Number)
        .map(n => (n === 1) ? 'onPlayer1Point' : 'onPlayer2Point');

    return Observable.from(dispatchNames)
        .startWith('onReset');
}

export default replayPoints;
