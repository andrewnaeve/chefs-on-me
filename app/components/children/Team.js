var React = require('react');

var Team = React.createClass({
    render: function () {
        var imgStyle = {
          width: 500
        }
        var teamStyle = {
            color: "white",
            fontSize: "24",
            textAlign: "center",
            backgroundColor: "#41DEB8",
            opacity: "0.75"
        };
        return (
            <div style={teamStyle} className="col-lg-8 col-lg-offset-2">
              <div className="row">
                <h2>Meet The Team</h2>
              </div>
              <div className="row">
                <div className="team">
                  <img style={imgStyle} src="img/team.jpg" alt=""/>
                </div>
              </div>
            </div>
        )
    }
});

module.exports = Team;
