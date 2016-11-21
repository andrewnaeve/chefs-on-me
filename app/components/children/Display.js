var React = require('react');

var Display = React.createClass({

 

    render: function() {

        var searchTerm = this.props.searchTerm; 
        var arr = this.props.results;
        console.log(arr)

        console.log(searchTerm)

        return(
            <div>
                <h1>{searchTerm}</h1>
                <h1>{arr}</h1>
            </div>
        );
    }

});

module.exports = Display;
