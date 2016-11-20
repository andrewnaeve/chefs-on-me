
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
           	<div className="collapse navbar-collapse navbar-header navbar-right navHeaderCollapse">
              <ul className="nav navbar-nav navbar-right" >
              	<li>
              		<a href="#home">Home</a>
              	</li>
                <li>
                	<a href ="#about">About Us</a>
                </li>
                <li>
                	<a href="#search">Find A Chef</a>
                </li>
                <li>
                	<a href="#signup" data-toggle="modal">Sign Up / Login</a>
                </li>
              </ul>
            </div>
          </div>
            <div className="row">
            	{this.props.children}
            </div>

         </div>
        )
      }

})


module.exports = Main;

