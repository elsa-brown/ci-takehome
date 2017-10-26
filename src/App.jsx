import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

class App extends Component {

	render() {
		const ants = this.props.data.ants
		console.log('ants', Array.isArray(ants))
		return (
			<div>
				{ants && ants.map(ant => (
					<div>{ ant.name }</div>
					)
				)}
				<div>Hello World!</div>
			</div>
		)
	}
};

const getData = gql`query {
	ants {
		name
  	color
  	length
  	weight
	}
}`

// console.log(getData)

const AppWithData = graphql(getData)(App);

export default AppWithData;
