var React = require('react');

var Display = React.createClass({

    render: function() {

        var searchTerm = this.props.searchTerm; 
        var results = this.props.results;
        console.log(searchTerm)


        return(

            <div>
                <h1>hi</h1>
            </div>
 
        )
    }
        
});

module.exports = Display;
