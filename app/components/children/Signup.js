
var React = require('react');
var ReactDOM = require('react-dom');

var helpers = require('../utils/helpers');


var Signup = React.createClass({



	onButtonClick: function(e){
		//console.log("E: " + e);
		e.preventDefault();
		//console.log(this.refs.name.value);
		console.log("hello")

		var namebro = this.refs.name.value;
		console.log(namebro)
		var email = this.refs.email.value;
		console.log(email)
		var password = this.refs.password.value;
		console.log(password)
		


		helpers.postSaved(namebro, email, password)
			.then(function(data) {
				console.log(data);
			}.bind(this))


		//console.log(namebro);

		//console.log(name + ' ' + email + ' ' + password + ' ' + address + ' ' + dinerOrChef);
	},

	render: function () {

		 var signUpStyle = {
            color: "white",
            fontSize: "24",
            backgroundColor: "rgba(28, 175, 237, 0.75)",
            fontFamily: "'Open Sans', sans-serif"
        };
		
		return (
			<div className="row">
				<div style={signUpStyle} className="col-md-6">
				
					<h2>Sign Up!</h2>

						<form onSubmit={this.onButtonClick} className="create-update-form" >
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input type="text" className="form-control" id="name" aria-describedby="Name" placeholder="Full Name" ref="name" />
							</div>

							<div className="form-group">
								<label htmlFor="email">Email address</label>
								<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" ref="email" />

							</div>

							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input type="password" className="form-control" id="password" placeholder="Password" ref="password" />
							</div>

							<div className="radio">
								<label><input type="radio" name="chefOrDiner" ref="dinerOrChef" value="0" />Chef</label>
							</div>

							<div className="radio">
								<label><input type="radio" name="chefOrDiner" ref="dinerOrChef" value="1" />Diner</label>
							</div>

							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
				</div>

				<div style={signUpStyle} className="col-md-4 col-md-offset-2">
					<h2>Log In</h2>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" ref="email" />

					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" id="password" placeholder="Password" ref="password" />
					</div>
				</div>
			</div>
			)
		}

})
 
module.exports = Signup;
