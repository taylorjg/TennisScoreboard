import * as Rx from 'rxjs';

class CurrentServer {
    constructor(player1, player2, streams) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentServer = player1;
        this._currentServer$ = new Rx.Subject();
        streams.gameWon$.subscribe(this.onGameWon.bind(this));
    }
    get currentServer$() {
        return this._currentServer$;
    }
    onGameWon(_) {
        this.toggleServer();
        this._currentServer$.next(this.currentServer);
    }
    toggleServer() {
        this.currentServer = (this.currentServer === this.player1) ? this.player2 : this.player1;
    }
};

export default CurrentServer;
