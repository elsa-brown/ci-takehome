import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import { generateAntWinLikelihoodCalculator, PriorityQueue } from '../utils.js';

import Header from './Header';
import AntContestants from './AntContestants';
import AntRankings from './AntRankings';
import Footer from './Footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			antList: [],
			status: ''
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (!this.state.status) {
			// "if" prevents calculations from running more than once
			this.setState({status: 
				'Pending'})
			const ants = this.props.data.ants
			let antQueue = new PriorityQueue();
			let antList = this.state.antList;
			ants.forEach(ant => {
				let likelihoodFunction = generateAntWinLikelihoodCalculator()

				// Ideally 'likelihoodFunction' would execute to return the likehood value, but I can only get it to return undefined. I know this is a closure problem.
				antQueue.insert({name: ant.name, color: ant.color}, likelihoodFunction);

				// TODO: Use the delays from 'Ant-win generator algorithm' to update ant order as the likelihood values are returned.
				let firstAnt = antQueue.popMax();
				antList.push(firstAnt);

				// setTimeout is used here to show an example for future development, once the issue with 'likelihoodFunction' is resolved.
				setTimeout(() => {this.setState({ antList: antList, status: 'Complete' })}, 1000);
			})
		}
	}

	render() {

		const ants = this.props.data.ants;
		const loading = this.props.data.loading;

		return (
			<div className="avenir">
				<Header ants={ants} handleClick={this.handleClick} />
				<AntContestants ants={ants} loading={loading} status={this.state.status} />
				<AntRankings loading={loading} antList={this.state.antList} />
				<Footer />
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

const AppWithData = graphql(getData)(App);

export default AppWithData;
