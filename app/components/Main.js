// Include React
var React = require('react');

var Main = React.createClass({

	getInitialState: function () {
		return { searchTerm: '', zipCode: '' }
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
