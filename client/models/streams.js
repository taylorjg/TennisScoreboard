import * as Rx from 'rxjs';

class Streams {
    constructor() {
        this.pointWon$ = new Rx.Subject();
        this.gameWon$ = new Rx.Subject();
    }
};

export default Streams;
