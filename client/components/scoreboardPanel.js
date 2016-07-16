import React from 'react';

const ScoreboardPanel = props => (
    <div className="row">
        <div className="col-md-offset-3 col-md-6">
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Sets</th>
                        <th>Games</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Player 1</td>
                        <td>{props.player1SetsText}</td>
                        <td>{props.player1GamesText}</td>
                        <td>{props.player1PointsText}</td>
                    </tr>
                    <tr>
                        <td>Player 2</td>
                        <td>{props.player2SetsText}</td>
                        <td>{props.player2GamesText}</td>
                        <td>{props.player2PointsText}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default ScoreboardPanel;
