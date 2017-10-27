import React from 'react';

const AntRankings = (props) => {
	console.log('AntRankings props', props)
	return (
		<div className="fl w-100-10 w-50-ns pl4 pl5-ns pr4 pr5-ns pb4 pb5-ns">
					<h2 className="tc pa2 pt4">Ant Rankings</h2>
					{(props.loading === true) ? 
						<div>Loading...</div> :
						<table className="f5 w-100 mw8 center" cellSpacing="0">
							<tbody className="1h-copy">
							{props.antList.map((ant, i) => (
									<tr key={i}>
										<td className={`pv3 pr3 bb b--black-20 ${ant.color.toLowerCase()}`}>{ ant.name }</td>
									</tr>
								))
							}
						</tbody>
					</table>
					}
				</div>
	)
}

export default AntRankings;