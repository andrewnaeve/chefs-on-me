var React = require('react');

var Search = React.createClass({

    handleChange: function(e) {
        var searchTerm = e.target.value;
        this.props.onChange(searchTerm)
    },

    onButtonClick: function(e) {
        e.preventDefault();
        var search = this.refs.search.value;
        this.props.onChange(search)
        alert(search)
        

    },

    render: function() {
        return(
            <div>
                <form onSubmit={this.onButtonClick}>

                    <div className="form-group">
                        <label htmlFor="term">Search Term:</label>
                        <input type="text" className="form-control" id="term" ref="search" />
                    </div>

                    <button type="submit" className="btn btn-default" id="searchBtn">Search</button>

                </form>    
            </div>
        )
    }

})

module.exports = Search;


