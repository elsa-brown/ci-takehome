/* eslint-disable */

import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';

import App from './App';
import RunButton from './RunButton';
import antBanner from '../public/antBanner.jpg';

class AppContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			antStack: Array.apply(null, Array(5)).map(function () {})
		}
		console.log('this.state', this.state)

		this.handleClick = this.handleClick.bind(this);
	}

		handleClick() {
		// if (this.props.ants.length) {
		// 	const ants = this.props.ants
		// } 
		console.log('in handleClick. ants', this.props.data.ants)
	}

	render() {
		this.state.antStack.forEach(ant => console.log(ant))
		function generateAntWinLikelihoodCalculator() {
  		var delay = 7000 + Math.random() * 7000;
  		var likelihoodOfAntWinning = Math.random();

		  return function(callback) {
		  	//console.log('callback', callback)
		    setTimeout(function() {
		      callback(likelihoodOfAntWinning);
		    }, delay);
		  };
		}

		function testCallback(arg) {
			return arg
		}
		const ants = this.props.data.ants
		// ants && ants.forEach((ant) => {
		// 	let likelihood = generateAntWinLikelihoodCalculator();
		// 	let result = likelihood(testCallback);
		// 	let antObj = {name: ant.name, likelihood: result}
		// 	// console.log('antObj', antObj)
		// 	this.state.antStack.push(antObj);
		// })
		// console.log('AppContainer: ants', ants)
		// let loading = this.props.data.loading
		// if (!loading) { 
		// 	// console.log('testAnt', ants[0]) 
		// 	let returnedFunc = generateAntWinLikelihoodCalculator();
			
		// 	console.log('returnedFunc', returnedFunc)
		//}
		

		return (
			<div className="avenir">
				<div className="fl w-100 tc pa4 pb4-ns bw1 bg-dark-red light-gray">
					<h1 className="f1">Ant Racing Calculator</h1>
					<p className="f4 mb4">Click the button to predict which ant is most likely to win.</p>
					<RunButton ants={ants} handleClick={this.handleClick} />
				</div>
				<div className="fl w-100-10 w-50-ns pl4 pl5-ns pb5-ns">
					<h2 className="tc pa2 pt4">Ant Contestants</h2>
					{(this.props.data.loading === true) ?
						<div>Loading...</div> :
						<App ants={ants} />
					}
				</div>
				<div className="fl w-100-10 w-50-ns pl4 pl5-ns pb4 pb5-ns">
					<h2 className="tc pa2 pt4">Ant Rankings</h2>
					{(this.props.data.loading === true) ? 
						<div>Loading...</div> :
						<ol>
							{this.state.antStack.map((ant, i) => (
								(ant === undefined) ?
									<li key={i}></li>
								:
									<li key={i}>{ ant || ant.name }</li>
								))
							}
						</ol>
					}
				</div>
				<div className="fl w-100 pt3-ns tc bt">
					<img src={ antBanner } />
				</div>
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

const AppWithData = graphql(getData)(AppContainer);

export default AppWithData;
