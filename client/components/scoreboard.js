import React from 'react';

export default class ScoreboardComponent extends React.Component {
    render() {
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
                            <td>{this.props.value.player1Score}</td>
                        </tr>
                        <tr>
                            <td>Player 2</td>
                            <td>{this.props.value.player2Score}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.props.onPlayer1}>Player 1 point</button>
                <button onClick={this.props.onPlayer2}>Player 2 point</button>
            </div>);
    }
}
