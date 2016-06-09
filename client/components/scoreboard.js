import React from 'react';

function Scoreboard(props) {
    return (
        <div>
            <table>
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
            <button onClick={props.onPlayer1Point}>Player 1 point</button>
            <button onClick={props.onPlayer2Point}>Player 2 point</button>
        </div>);
}

export default Scoreboard;
