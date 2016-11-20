// Include React
var React = require('react');
var Signup = require('./children/Signup.js');
var Search = require('./children/Search');
var Display = require('./children/Display');

var Main = React.createClass({

	getInitialState: function () {
		return {
      searchTerm: '',

    }
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
              <li><a href ="#about" data-toggle="modal">About</a>
              </li>
              <li><a href="#trade" data-toggle="modal"
                  >Tutorial</a>
              </li>
              <li>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  Browse<span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>Search by Location</li>
                  <li><a href="#">Search by Category</a></li>
                  <li><a href="#">Search by Chef</a></li>
                </ul>

              </li>
              <li><a href="#signup" data-toggle="modal">Sign Up</a>
              </li>
              <li><a href="#login" data-toggle="modal">Login</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="main">
            <img className="logo" src="img/logo.png" alt=""/>
          </div>
        </div>
        <div className="container">

          {/* <div className="row">
            <Search onChange={this.updateSearch}/>
            </div>
            <div className="row">
            <Display searchTerm={this.state.searchTerm}/>
            </div>
          */}

        </div>

      </div>
		)
	}
});


module.exports = Main;
