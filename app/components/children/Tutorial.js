var React = require('react');

var Tutorial = React.createClass({
    render: function () {
        var videoStyle = {
          opacity: "1"
        }
        var tutorialStyle = {
            color: "white",
            fontSize: "24",
            textAlign: "center",
            backgroundColor: "#41DEB8",
            opacity: "0.75"
        };
        return (
            <div style={tutorialStyle} className="col-lg-8 col-lg-offset-2">
              <div className="row">
                <h2>Getting Started</h2>
              </div>
              <div className="row">
                <div className="tutorial">
                  <p>Let the experience begin...</p>
                  <iframe style={videoStyle} width="560" height="500" src="https://www.youtube.com/embed/mtNIdiOpJA0" frameborder="0" allowfullscreen></iframe>
                  </div>
              </div>
            </div>
        )
    }
});

module.exports = Tutorial;
