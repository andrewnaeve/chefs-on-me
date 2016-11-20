var React = require('react');

var Team = React.createClass({
    render: function () {

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
                <h2>The Team</h2>
              </div>
              <div className="row">
                <div className="team">
                  <p>We at Chef's on Me believe in bringing the exclusivity & luxury of a
                  private chef experience to your home at an affordable price.</p>
                </div>
              </div>
            </div>
        )
    }
});

module.exports = Team;
