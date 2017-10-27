import React, { Component } from 'react';
// import RunButton from './RunButton';

class App extends Component {
	constructor(props) {
		super(props)
		console.log('App: props', this.props.ants)
		// this.state = {
		// 	ants: this.props
		// }
		// this.handleClick = this.handleClick.bind(this)
	}

	// handleClick() {
	// 	// if (this.props.ants.length) {
	// 	// 	const ants = this.props.ants
	// 	// } 
	// 	console.log('in handleClick. ants', this.props.ants)
	// }

	render() {
		const ants = this.props.ants
		console.log('App: ants', ants)

		return (
			<div>
				<table className="f5 w-100 mw8 center" cellspacing="0">
					<thead>
						<tr className="fw5 bb b--black-20 tl pb3 pr3 bg-white">Name</tr>
						<tr></tr>
					</thead>
					<tbody className="1h-copy">
					{ants && ants.map((ant, i) => (
						<tr key={i} className="pv3 pr3 bb b--black-20">{ ant.name }</tr>
						)
					)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default App;