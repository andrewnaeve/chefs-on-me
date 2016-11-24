
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
		var picture = this.refs.pic.value;
			console.log(picture)
		var cuisine = this.refs.cuisine.value;
			console.log(cuisine)




		helpers.postSaved(namebro, email, password, picture, cuisine)
			.then(function(data) {
				console.log("hello" + data);
			}.bind(this))

	},

	render: function () {

    var facebook = {
      width:190
    }
    var signupDiv = {
      padding:20
    }
		 var signUpStyle = {
            color: "white",
            fontSize: "24",
			marginTop: "50",
			borderRadius: "10",
            backgroundColor: "rgba(28, 175, 237, 0.75)",
            fontFamily: "'Open Sans', sans-serif",
						padding: 10
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

						<div className="form-group">
							<label htmlFor="pic">Picture</label>
							<input type="text" className="form-control" id="pic" aria-describedby="pic" placeholder="Enter a picture URL" ref="pic" />
						</div>

						<div className="form-group">
							<label htmlFor="cuisine">Cuisine</label>
							<input type="text" className="form-control" id="cuisine" placeholder="What are your spcialties?" ref="cuisine" />
						</div>

						<div className="row" style={signupDiv}>
							<button type="submit" className="btn btn-primary">Submit</button>
							<img className="facebook" style={facebook} src="img/facebook-login.png" alt=""/>
						</div>

					</form>
				</div>

				<div style={signUpStyle} className="col-md-4 col-md-offset-2">
					<h2>Log In</h2>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" ref="logEmail" />

					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" className="form-control" id="password" placeholder="Password" ref="logPassword" />
					</div>

					<div className="row" style={signupDiv}>
						<button type="submit" className="btn btn-primary">Submit</button>
						<img className="facebook" style={facebook} src="img/facebook-login.png" alt=""/>
					</div>

				</div>
			</div>
			)
		}

})

module.exports = Signup;
