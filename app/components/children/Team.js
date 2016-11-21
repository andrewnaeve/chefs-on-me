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
            backgroundColor: "rgba(28, 175, 237, 0.75)",
            fontFamily: "'Open Sans', sans-serif"
        };
        return (
            <div style={teamStyle} className="col-lg-8 col-lg-offset-2">
              <div className="row">
                <h2>Meet The Team</h2>
              </div>
              <div className="row">
                <div className="team">
                  <img style={imgStyle} src="img/team.jpg" alt=""/>
                  <br />
                    <p><u>CEO:</u></p>
                    <p>Bianca Zakerani</p>
                    <p><u>CFO:</u></p>
                    <p>James Heaphey</p>
                    <p><u>Head of Market Research:</u></p>
                    <p>Allison Taplin</p>
                    <p><u>Head of Strategic Partnerships:</u></p>
                    <p>Marissa Bowden</p>
                    <p><u>Senior Developers:</u></p>
                    <p>Drake Smith</p>
                    <p>Andrew Naeve</p>
                    <p>Jake Lee</p>
                    <p>Andrew Kil</p> 
                </div>
              </div>
            </div>
        )
    }
});

module.exports = Team;
