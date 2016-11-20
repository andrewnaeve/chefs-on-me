
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');




var Main = React.createClass({
  render: function () {
    return (
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


            {this.props.children}

          </div>
        )
      }

})


module.exports = Main;

