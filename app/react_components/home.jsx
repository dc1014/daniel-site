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
				<div>
					<p>I am a React component.</p>
				</div>
				);
		}
	});

	module.exports = Home;
	
}());