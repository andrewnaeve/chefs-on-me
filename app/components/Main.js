// Include React
var React = require('react');
var Signup = require('./children/Signup.js');
var Search = require('./children/Search');
var Display = require('./children/Display');
var Navbar = require('./children/Navbar.js');

var Main = React.createClass({
	//render component
	render: function(){
		return(
			<div className="container">

        <Navbar />

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
