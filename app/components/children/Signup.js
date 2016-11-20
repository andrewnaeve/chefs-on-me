// Include React
var React = require('react');


var Signup = React.createClass({
	handleChange: function(e){

	},
	onButtonClick: function(e){
		//console.log("E: " + e);
		e.preventDefault();
		//console.log(this.refs.name.value);
		console.log(this.refs.dinerOrChef.value);
		var namebro = this.refs.name.value;
		var email = this.refs.email.value;
		var password = this.refs.password.value;
		var address = this.refs.address.value;
		var dinerOrChef = this.refs.dinerOrChef.value;
		//console.log(namebro);

		//console.log(name + ' ' + email + ' ' + password + ' ' + address + ' ' + dinerOrChef);
	},

	//render component
	render: function(){
		return(
			<div className="row">
			    <h2>Sign Up!</h2>
			    <form onSubmit={this.onButtonClick} className="create-update-form" action="/create/user" method="POST">
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
			        	<label><input type="radio" name="chefOrDiner" ref="dinerOrChef" value="Chef" />Chef</label>
			        </div>
			     	<div className="radio">
			        	<label><input type="radio" name="chefOrDiner" ref="dinerOrChef" value="Diner" />Diner</label>
			        </div>

			        <button type="submit" className="btn btn-primary">Submit</button>
			    </form>
			</div>
		)
	}
});


module.exports = Signup;
