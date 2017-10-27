import React from 'react';

const AntList = (props) => {

	const ants = props.ants;

	return (
		<div>
			<table className="f5 w-100 mw8 center" cellSpacing="0">
				<tbody className="1h-copy">
				{ants && ants.map((ant, i) => (
					<tr key={i}>
						<td className={`pv3 pr3 bb b--black-20 ${ant.color.toLowerCase()}`}>{ ant.name }</td>
						<td className={`pv3 pr3 bb b--black-20 ${ant.color.toLowerCase()}`}>{ props.status }</td>
					</tr>
					)
				)}
				</tbody>
			</table>
		</div>
	)
}

export default AntList;