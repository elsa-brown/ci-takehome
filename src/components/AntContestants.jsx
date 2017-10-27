import React from 'react';

import AntList from './AntList';

const AntContestants = (props) => {
	return (
	<div className="fl w-100-10 w-50-ns pl4 pl5-ns pb5-ns">
		<h2 className="tc pa2 pt4">Ant Contestants</h2>
		{
			(props.loading === true) ?
				<div>Loading...</div> :
				<AntList ants={props.ants} status={props.status} />
		}
		</div>
	)
}

export default AntContestants;