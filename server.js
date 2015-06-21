var http = require('http'),
    browserify = require('browserify'),
    literalify = require('literalify'),
    React = require('react'),
    Hapi = require('hapi'),
    url = require('url'),
    path = require("path"),
    Good = require('good'),
    config = require('./config');

var server = new Hapi.Server();

server.connection({ port: config.port});

/* Directory routing
server.route({
  method: 'GET',
  path: '/{p*}',
  handler:  {

    directory: {
      path: './public',
      listing: false,
      index: true
    }
  }
});*/

server.route({
  method: 'GET',
  path: '/{p*}',
handler: function(request, reply) {
      if (request.url.path == '/') {
          reply.file('./public/index.html')
      } else if (request.url.path == '/vendor.js') {
          reply.file(__dirname+'/public/'+request.url.path)
      } else if (request.url.path == '/bundle.js') {
          reply.file(__dirname+'/public/'+request.url.path)
      } else {
        reply("404'ed! Why you come here?").code(404);
      }
   }
});

//expose assets
server.route({
	method: 'GET',
	path: '/assets/{p*}',
	handler: {
		directory: {
			path: './public/assets'
		}
	}
});

//add 404 for the rest of the stuff later
server.route({
	method: '*',
	path: '/{p*}',
	handler: function(request, reply){

	}
});

server.route({
  method: 'GET',
  path: '/dad',
  handler: function(request, reply) {
    reply.file('./public/fathers-day.html')
  }
})

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
