import React from 'react';
import { connect } from 'react-redux';
import formatter from '../models/formatter';
import * as actions from '../actions';
import ScoreboardPanel from '../components/scoreboardPanel';
import ManualPointsPanel from '../components/manualPointsPanel';
import ReplayPointsPanel from '../components/replayPointsPanel';

class App extends React.Component {
    render() {
        return (
            <div>
                <ScoreboardPanel { ...this.props.scoreboard } />
                <ManualPointsPanel
                    { ...this.props.ui }
                    player1Point={this.props.player1Point}
                    player2Point={this.props.player2Point}
                    reset={this.props.reset}
                    />
                <ReplayPointsPanel
                    { ...this.props.ui }
                    replayPoints={this.props.replayPoints}
                    cancelReplaying={this.props.cancelReplaying}
                    />
            </div>
        );
    }
}

App = connect(formatter.formatGamePoints, actions)(App);

export default App;
