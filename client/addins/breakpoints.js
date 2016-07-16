class Breakpoints {
    constructor(player1, player2, streams, currentServer$) {
        this.player1 = player1;
        this.player2 = player2;
        this.streams = streams;
        this.currentServer$ = currentServer$;
        this.player1Points = 0;
        this.player2Points = 0;
        streams.pointWon$.subscribe(this.onPointWon.bind(this));
        streams.gameWon$.subscribe(this.onGameWon.bind(this));
    }
    onPointWon(point) {
        if (point.winner === this.player1) {
            this.player1Points++;
        }
        if (point.winner === this.player2) {
            this.player2Points++;
        }
        const p1 = this.player1Points;
        const p2 = this.player2Points;
        console.log(`onPointWon - player1Points: ${p1}; player2Points: ${p2}`);
        if (p2 >= 3 && p2 > p1) {
            console.log(`*** BREAKPOINT (${p2 - p1}) ***`);
        }
    }
    onGameWon(_) {
        this.player1Points = 0;
        this.player2Points = 0;
    }
};

export default Breakpoints;
