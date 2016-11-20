// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;
var IndexRedirect = Router.IndexRedirect;

// Reference the high-level components
var Main = require('./app/components/Main');
var Home = require('./app/components/children/Home');


module.exports = (


	<Route path='/' component={Main}>
		<Route path='Home' component={Home} >




		</Route>
	


		<IndexRedirect to={"/Home"} />
		
	</Route>


);