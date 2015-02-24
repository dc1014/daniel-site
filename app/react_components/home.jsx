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
					<p> Hi der, I am a component </p>
				</div>
				);
		}
	});

	module.exports = home;
	
}());