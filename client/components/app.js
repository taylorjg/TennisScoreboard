import React from 'react';
import { connect } from 'react-redux';
import formatter from '../models/formatter';
import actions from '../actions';

class App extends React.Component {
    render() {
        const spacer = ' ';
        return (
            <div>
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
                                    <td>{this.props.player1SetsText}</td>
                                    <td>{this.props.player1GamesText}</td>
                                    <td>{this.props.player1PointsText}</td>
                                </tr>
                                <tr>
                                    <td>Player 2</td>
                                    <td>{this.props.player2SetsText}</td>
                                    <td>{this.props.player2GamesText}</td>
                                    <td>{this.props.player2PointsText}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <hr />
                        <button type="button" onClick={this.props.onPlayer1Point} className="btn btn-default btn-sm">Player 1 point</button>
                        {spacer}
                        <button type="button" onClick={this.props.onPlayer2Point} className="btn btn-default btn-sm">Player 2 point</button>
                        {spacer}
                        <button type="button" onClick={this.props.onReset} className="btn btn-default btn-sm btn-danger">Reset</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <hr />
                        <input 
                            type="text"
                            size="60"
                            title="Enter a string of 1's and 2's"
                            ref={node => this.points = node} />
                        {spacer}
                        <button 
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => this.props.onReplayPoints(this.points.value)}
                        >Replay points</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = formatter.formatGamePoints;

const mapDispatchToProps = {
    onPlayer1Point: actions.player1Point,
    onPlayer2Point: actions.player2Point,
    onReplayPoints: actions.replayPoints,
    onReset: actions.reset
};

App = connect(
    mapStateToProps,
    mapDispatchToProps)
(App);

export default App;
