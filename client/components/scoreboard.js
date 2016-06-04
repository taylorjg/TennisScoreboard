import React from "react";

export default class Scoreboard extends React.Component {
    render() {
        const result =
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
            </table>;
        return result;
    }
}
