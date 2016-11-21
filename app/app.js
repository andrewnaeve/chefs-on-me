var React = require('react');
var ReactDOM = require('react-dom');
var Signup = require('./components/children/Signup');
var Search = require('./components/children/Search');
var Display = require('./components/children/Display');

var Home = require('./components/children/Home');
var Main = require('./components/Main');

var Router = require('react-router').Router
var routes = require('./config/routes')





ReactDOM.render(

<Router>{routes}</Router>,


document.getElementById('app')

)
