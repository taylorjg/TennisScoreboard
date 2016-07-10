import { Observable } from 'rx';

const replayPoints = points => {

    const dispatchNames = points
        .split('')
        .map(Number)
        .map(n => (n === 1) ? 'onPlayer1Point' : 'onPlayer2Point');

    dispatchNames.unshift('onReset');

    return Observable.from(dispatchNames);
}

export default replayPoints;
