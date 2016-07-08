import React from 'react';

class Scoreboard extends React.Component {
    render() {
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
                                    <td>{this.props.player1PointsText}</td>
                                </tr>
                                <tr>
                                    <td>Player 2</td>
                                    <td>{this.props.player2PointsText}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <button type="button" onClick={this.props.onPlayer1Point} className="btn btn-default btn-sm">Player 1 point</button>{" "}
                        <button type="button" onClick={this.props.onPlayer2Point} className="btn btn-default btn-sm">Player 2 point</button>{" "}
                        <button type="button" onClick={this.props.onReset} className="btn btn-default btn-sm btn-danger">Reset</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <input type="text" ref={node => this.points = node}></input>{" "}
                        <button type="button" onClick={() => this.props.onReplayPoints(this.points.value)} className="btn btn-default btn-sm">Replay points</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Scoreboard;
