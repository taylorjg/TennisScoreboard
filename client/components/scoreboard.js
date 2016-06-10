import React from 'react';

function Scoreboard(props) {
    return (
        <div>
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <table className="table table-condensed">
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Player 1</td>
                                <td>{props.player1Score}</td>
                            </tr>
                            <tr>
                                <td>Player 2</td>
                                <td>{props.player2Score}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <button type="button" onClick={props.onPlayer1Point} className="btn btn-default btn-sm">Player 1 point</button>{" "}
                    <button type="button" onClick={props.onPlayer2Point} className="btn btn-default btn-sm">Player 2 point</button>{" "}
                    <button type="button" onClick={props.onReset} className="btn btn-default btn-sm btn-danger">Reset</button>
                </div>
            </div>
        </div>
    );
}

export default Scoreboard;
