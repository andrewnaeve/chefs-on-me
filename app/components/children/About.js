var React = require('react');

var About = React.createClass({
    render: function () {

        var aboutStyle = {
            color: "white",
            fontSize: "24",
            textAlign: "center",
            backgroundColor: "#41DEB8",
            opacity: "0.75"
        };
        return (
            <div style={aboutStyle} className="col-lg-8 col-lg-offset-2">
                    <div className="row">
                        <h2>About Us</h2>
                    </div>
                    <div className="row">
                        <div className="aboutme">
                            <p>We at Chef's on Me believe in bringing the exclusivity & luxury of a 
                            private chef experience to your home at an affordable price.</p>
                        </div>
                    </div>
            </div>
        )
    }
});

module.exports = About;

