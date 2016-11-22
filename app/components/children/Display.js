var React = require('react');

var Display = React.createClass({

    render: function() {

        var searchTerm = this.props.searchTerm; 
        var results = this.props.results;

        console.log(searchTerm)

        return(
            <div>
                <div>
                    <h1>{searchTerm}</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {results}
                    </div>
                </div>
            </div>

        );
    }

});

module.exports = Display;
