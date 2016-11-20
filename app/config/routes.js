// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;
var IndexRedirect = Router.IndexRedirect;

// Reference the high-level components
var Main = require('../components/Main');
var Home = require('../components/children/Home');
var Search = require('../components/children/Search');
var Signup = require('../components/children/Signup');
var About = require('../components/children/About');

module.exports = (

	<Route path='/' component={Main}>
		<Route path='Home' component={Home} >

		</Route>
		<Route path='Search' component={Search} >

		</Route>
		<Route path='Signup' component={Signup} >

		</Route>

		<Route path='About' component={About} >

		</Route>

		<IndexRedirect to={"/Home"} />

	</Route>

);
