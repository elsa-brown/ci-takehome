import React from 'react';

const RunButton = (props) => {
	return (
		<div className="tc 1rem">
		<button className="f6 ttu tracked link dim ba br2 b--light-gray bw1 ph3 pv2 mb2 dib light-gray bg-dark-red" onClick={props.handleClick}>Calculate Rankings</button>
		</div>
	)
}

export default RunButton;

