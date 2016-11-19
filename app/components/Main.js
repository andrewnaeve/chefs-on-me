// Include React 
var React = require('react');
// Include React 
var React = require('react');
var Search = require('./children/Search.js');

var Main = React.createClass({

	getInitialState: function () {
		return { searchTerm: '', zipCode: '' }
	},

	updateSearch: function (newTerm, newZip) {
		this.setState({
			searchTerm: newTerm,
			zipCode: newZip
		});
	},



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



			</div>


		)
	}
});


module.exports = Main;