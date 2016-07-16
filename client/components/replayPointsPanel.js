import React from 'react';

const ReplayPointsPanel = props => {
    let points;
    let period;
    return (
        <div className="row">
            <div className="col-md-offset-2 col-md-8">
                <hr />
                <input
                    type="text"
                    size="60"
                    title="A string of 1's and 2's"
                    placeholder="11122"
                    ref={node => points = node} />
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
                        props.replayPoints(points.value, period.value || undefined);
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

export default ReplayPointsPanel;
