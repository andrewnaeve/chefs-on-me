// Include React
var React = require('react');
var Signup = require('./children/Signup.js');
var Search = require('./children/Search');
var Display = require('./children/Display');

var Main = React.createClass({

	getInitialState: function () {
		return { searchTerm: '' }
	},

	updateSearch: function (newTerm) {

		this.setState({
			searchTerm: newTerm,
		});

	},

	//render component
	render: function(){
		return(
			<div className="container">

        <div className="row">
          <div className="collapse navbar-collapse navbar-header navbar-right navHeaderCollapse">
            <ul className="nav navbar-nav navbar-right" >
              <li><a>About</a>
              </li>
              <li><a href="#trade" data-toggle="modal"
                  >Tutorial</a>
              </li>
              <li><a href="#add" data-toggle="modal"
                  >BBBBBBBBB</a>
              </li>
              <li><a href="#signup" data-toggle="modal">Sign Up</a>
              </li>
              <li><a href="#login" data-toggle="modal">Login</a>
              </li>
            </ul>
          </div>
        </div>

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
        <Signup />

      </div>
		)
	}
});

module.exports = Main;
