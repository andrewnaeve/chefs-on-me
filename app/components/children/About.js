var React = require('react');

var About = React.createClass({
    render: function () {

        var aboutStyle = {
            color: "white",
            fontSize: "24",
            textAlign: "center",
            backgroundColor: "rgba(28, 175, 237, 0.75)",
            fontFamily: "'Open Sans', sans-serif"
        };
        return (
            <div style={aboutStyle} className="col-lg-12">
                    <div className="row">
                        <h2>About Us</h2>
                        <br />
                    </div>
                    <div className="row">
                        <div className="aboutme">
                            <p>We at Chef's on Me believe in bringing the exclusivity & luxury of a 
                            private chef experience to your home at an affordable price.</p>
                            <br />
                            <p>In a world where we can use our phones to order everything from a ride to a private 
                            plane, we at Chefs On Me bring that accessibility and ease to the private chef experience.</p>
                            <br />

                            <p>If you have ever wanted more time to spend with your loved ones, or the ability to bring together the people in your life our service is for you.</p>
                            <br />
                            <p>After you take the time to sign-up Chefs on Me will give you access to the many and diverse chefs in your area. 
                            We personally check every chef’s background to ensure that your dining experience is one you won’t forget. 
                            Instead of spending your valuable time cooking, cleaning, and serving food, allow us to give you the freedom to relax and spend more time with those you care about.</p>
                        </div>
                    </div>
            </div>
        )
    }
});

module.exports = About;

