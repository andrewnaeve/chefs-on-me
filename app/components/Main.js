
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./children/Home');

var Search = require('./children/Home');
var Signup = require('./children/Signup');
var Display = require('./children/Display');


var Main = React.createClass({
  render: function () {
    return (

        <div className="container">
          <div className="row">
            <div class="navbar navbar-inverse navbar-fixed-top">
              <a className="navbar-left" href="#home">
                <img className="logo-hover nav-logo" src="/img/nav-logo.png" alt="Chefs-on-me" />
              </a>

              <ul className="nav navbar-nav navbar-right" >

                <li>
                  <a href="#home">Home</a>
                </li>

                <li><a href ="#about" data-toggle="modal">About Us</a>
                </li>
                <li><a href ="#team" data-toggle="modal">Team</a>
                </li>
	                <li>
	                	<a href="#search">Find A Chef</a>
	                </li>
	                  <li><a href="#signup" data-toggle="modal">Sign Up / Login</a>
	                  </li>
                </ul>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
            <div className="row">
              {this.props.children}
            </div>

         </div>

        )
      }

})


module.exports = Main;
