// Include React 
var React = require('react');
var Signup = require('./children/Signup.js');


var Main = React.createClass({


	//render component
	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1>Chefs On Me</h1>
					</div>
				</div>

				<Signup />
			</div>


		)
	}
});


module.exports = Main;