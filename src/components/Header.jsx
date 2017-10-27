import React from 'react';

import RunButton from './RunButton';

const Header = (props) => {
	return(
		<div className="fl w-100 tc pa4 pb4-ns bw1 bg-dark-red light-gray">
			<h1 className="f1">Ant Racing Calculator</h1>
			<p className="f4 mb4">Click the button to rank the ants in order of likelihood of winning.</p>
			<RunButton ants={props.ants} handleClick={props.handleClick} />
		</div>
	)
}

export default Header;