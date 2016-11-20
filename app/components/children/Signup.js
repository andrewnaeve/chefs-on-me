// Include React 
var React = require('react');


var Signup = React.createClass({
	handleChange: function(e){

	},
	onButtonClick: function(e){
		e.preventDefault();

	},


	//render component
	render: function(){
		return(
				<div className="row">

					<h2>Sign Up!</h2>
		            <form onSubmit={this.onButtonClick} className="create-update-form" action="/add" method="POST">

						<div className="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
							</input>
						</div>
						<div className="form-group">
    						<label for="exampleInputPassword1">Password</label>
    						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  						</div>
  						<fieldset className="form-group">
    						<legend>Chef or Diner</legend>
						    <div className="form-check">
						        <label className="form-check-label">
						        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1"></input>
						        Are you a chef?
						        </label>
						    </div>
						    <div className="form-check">
							    <label className="form-check-label">
							        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"></input>
							        Are you a diner?
							     </label>
    						</div>
    					</fieldset>
    					<button type="submit" class="btn btn-primary">Submit</button>
					</form>

				</div>
		)
	}
});


module.exports = Signup;