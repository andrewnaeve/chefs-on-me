var React = require('react');

var Display = React.createClass({

    render: function() {

        var searchTerm = this.props.searchTerm; 

        console.log(searchTerm)

        return(
            <div>
                <h1>{searchTerm}</h1>
            </div>
        );
    }

});

module.exports = Display;
