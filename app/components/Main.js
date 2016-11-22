
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./children/Home');

var Search = require('./children/Home');
var Signup = require('./children/Signup');
var Display = require('./children/Display');


var Main = React.createClass({

  render: function () {

  	var navStyle = {

         fontSize: "22",
         width: "100%",
	};
  var aStyle = {

    color: "white",
    fontWeight: "bold",
    fontFamily: "'Open Sans', sans-serif",
    height: "59"
  };

        return (
                <div className="col-lg-12">
                  <div style={navStyle} className="row">
                    <div class="navbar navbar-inverse navbar-fixed-top">
                      <a className="navbar-left" href="#home">
                        <img className="logo-hover nav-logo" src="/img/nav-logo.png" alt="Chefs-on-me" />
                      </a>
                      <ul className="nav navbar-nav navbar-right" >
                        <li>
                                    <a style={aStyle} href="#home">Home</a>
                                </li>
                                <li><a style={aStyle} href ="#about" data-toggle="modal">About Us</a>
                                </li>
                                <li><a style={aStyle} href ="#team" data-toggle="modal">Meet the Team</a>
                                </li>
                                <li><a style={aStyle} href ="#tutorial" data-toggle="modal">How it Works</a>
                                </li>
                                <li>
                                    <a style={aStyle} href="#search">Find A Chef</a>
                                </li>
                                <li><a style={aStyle} href="#signup" data-toggle="modal">Sign Up / Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <br />
                    
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
                )
    }

});

module.exports = Main;
