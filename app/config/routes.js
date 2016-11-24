// Inclue the React library
var React = require('react');
// Include the Router
var Router = require('react-router');
var Route = Router.Route;
//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;
var IndexRedirect = Router.IndexRedirect;
var hashHistory = Router.hashHistory;
// Reference the high-level components
var Main = require('../components/Main');
var Home = require('../components/children/Home');
var Search = require('../components/children/Search');
var Signup = require('../components/children/Signup');
var About = require('../components/children/About');
var Tutorial = require('../components/children/Tutorial');
var Team = require('../components/children/Team');


module.exports = (

	<Route path='/' component={Main}>
		<Route path='Home' component={Home} />
		<Route path='Search' component={Search} />
		<Route path='Signup' component={Signup} />
		<Route path='Tutorial' component={Tutorial} />
		<Route path='About' component={About} />
		<Route path='Team' component={Team} />
		<IndexRedirect to={"/Home"} />
	</Route>

);
