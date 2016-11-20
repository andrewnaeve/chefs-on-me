// Include React 
var React = require('react');
var Search = require('./children/Search.js');
var Display = require('./children/Display.js');

var Main = React.createClass({

	getInitialState: function () {
		return { searchTerm: '' }
	},

	updateSearch: function (newTerm) {

		this.setState({
			searchTerm: newTerm,
		});

	},

	render: function(){
		return(
			<div className="container">

				<div className="row">
					<div className="jumbotron">
						<h1>Chefs On Me</h1>
					</div>
				</div>
				<div className="row">
					<Search onChange={this.updateSearch}/>
				</div>
				<div className="row">
					<Display searchTerm={this.state.searchTerm}/>
				</div>


			</div>




		)
	}
});


module.exports = Main;