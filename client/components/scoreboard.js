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
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Player 2</td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
                <button>Player 1 point</button>
                <button>Player 2 point</button>
            </div>);
    }
}
