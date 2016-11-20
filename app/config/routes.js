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
<<<<<<< HEAD
		<Route path='About' component={About} >

		</Route>
=======
>>>>>>> eb8d4e4251ee39284c9e155083fa97b751110018

		<IndexRedirect to={"/Home"} />

	</Route>

);
