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
                        <td>{props.value.player1Score}</td>
                    </tr>
                    <tr>
                        <td>Player 2</td>
                        <td>{props.value.player2Score}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={props.onPlayer1}>Player 1 point</button>
            <button onClick={props.onPlayer2}>Player 2 point</button>
        </div>);
}

Scoreboard.propTypes = {
    value: React.PropTypes.object.isRequired,
    onPlayer1: React.PropTypes.func.isRequired,
    onPlayer2: React.PropTypes.func.isRequired
}

export default Scoreboard;
