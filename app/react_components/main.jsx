(function () {
  'use strict';

  var React = require('react'),
    Home = React.createFactory(require('./home.jsx'));

  React.render(
    Home(),
    document.getElementById('home')
  );

}());
