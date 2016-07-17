import React from 'react';

const ReplayMatchPanel = props => {
    let matchList;
    let period;
    const matches = [
        { points: '1112', value: 0 },
        { points: '11221212211221', value: 1 }
    ];
    return (
        <div className="row">
            <div className="col-md-offset-2 col-md-8">
                <hr />
                <select ref={node => matchList = node}>
                    {matches.map(match => <option key={match.value} value={match.value}>{match.points}</option>)}
                </select>
                {' '}
                <input
                    type="text"
                    size="10"
                    title="The period to wait between points (in ms)"
                    placeholder="500"
                    ref={node => period = node} />
                {' '}
                <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                        props.replayPoints(matches[matchList.value].points, period.value || undefined);
                    } }
                    disabled={props.replaying}
                    >Replay points</button>
                {' '}
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={props.cancelReplaying}
                    disabled={!props.replaying}
                    >Cancel</button>
            </div>
        </div>
    )
}

export default ReplayMatchPanel;
