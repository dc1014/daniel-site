var config = require('./config');
var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server();

server.connection({ port: config.port});



server.route({
	method: '*',
	path: '/{p*}',
	handler: function(request, reply) {
	return reply("404'ed! Why you go here? It not exist.").code(404);
}
});

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply) {
		reply('hi der');
	}
});

server.register({
	register: Good,
	options: {
		reporters: [{
			reporter:require('good-console'),
			args:[{ log: '*', response: '*'}]
		}]
	}
}, function(err) {
	if (err) {
		throw err; //problem with plugin
	}

	server.start(function () {
		console.log('Server running at: ', server.info.uri);
	});
});