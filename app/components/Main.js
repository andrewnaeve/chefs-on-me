// Include React 
var React = require('react');
var Search = require('./children/Search');

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


	//render component
	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1>Chefs On Me</h1>
					</div>
				</div>

				<div>
					<Search onChange={this.changeSearch} />
				</div>

			</div>


		)
	}
});


module.exports = Main;