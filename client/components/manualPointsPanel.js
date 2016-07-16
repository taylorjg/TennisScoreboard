import React from 'react';

const ManualPointsPanel = props => (
    <div className="row">
        <div className="col-md-offset-2 col-md-8">
            <hr />
            <button 
                type="button"
                className="btn btn-default btn-sm"
                onClick={props.player1Point}
                disabled={props.replaying}
            >Player 1 point</button>
            {' '}
            <button
                type="button"
                className="btn btn-default btn-sm"
                onClick={props.player2Point}
                disabled={props.replaying}
            >Player 2 point</button>
            {' '}
            <button
                type="button"
                className="btn btn-default btn-sm btn-danger"
                onClick={props.reset}
                disabled={props.replaying}
            >Reset</button>
        </div>
    </div>
)

export default ManualPointsPanel;
