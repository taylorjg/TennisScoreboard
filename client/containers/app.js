import React from 'react';
import { connect } from 'react-redux';
import formatter from '../models/formatter';
import * as actions from '../actions';
import ScoreboardPanel from '../components/scoreboardPanel';

class App extends React.Component {
    render() {
        const spacer = ' ';
        return (
            <div>
                <ScoreboardPanel { ...this.props.scoreboard } />
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <hr />
                        <button 
                            type="button"
                            className="btn btn-default btn-sm"
                            onClick={this.props.player1Point}
                            disabled={this.props.ui.replaying}
                        >Player 1 point</button>
                        {spacer}
                        <button
                            type="button"
                            className="btn btn-default btn-sm"
                            onClick={this.props.player2Point}
                            disabled={this.props.ui.replaying}
                        >Player 2 point</button>
                        {spacer}
                        <button
                            type="button"
                            className="btn btn-default btn-sm btn-danger"
                            onClick={this.props.reset}
                            disabled={this.props.ui.replaying}
                        >Reset</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <hr />
                        <input
                            type="text"
                            size="60"
                            title="Enter a string of 1's and 2's"
                            placeholder="e.g. 11122"
                            ref={node => this.points = node} />
                        {spacer}
                        <input
                            type="text"
                            size="10"
                            title="Enter an interval to wait between points (in ms)"
                            placeholder="e.g. 500"
                            ref={node => this.interval = node} />
                        {spacer}
                        <button 
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                this.props.replayPoints(this.points.value, this.interval.value || undefined);
                            }}
                            disabled={this.props.ui.replaying}
                        >Replay points</button>
                        {spacer}
                        <button 
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={this.props.cancelReplaying}
                            disabled={!this.props.ui.replaying}
                        >Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

App = connect(formatter.formatGamePoints, actions)(App);

export default App;
