(function() {
	'use strict';

	var React = require('react');

	var Home = React.createClass({
		getInitialState: function() {
			return {};
		},
		componentDidMount: function() {},
		componentWillUnmount: function() {},

		render: function() {
			return(
				<div className="container">
				<div className="jumbotron">
				<h1> Daniel Casper </h1>
				<p> Is a human being. </p>
				</div>
				</div>
		)}
	});

	module.exports = Home;
	
}());