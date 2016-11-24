var React = require('react');
var Display = require('./Display');
var helpers = require('../utils/helpers')

var Search = React.createClass({

    getInitialState: function () {
        return {searchTerm: '', results: ''}
    },

    changeState: function (newSearch) {
        this.setState({searchTerm: newSearch})
    },

    handleChange: function (e) {

        e.preventDefault();
        var searchTerm = this.refs.search.value;
        console.log(searchTerm)
        this.changeState(searchTerm)

        helpers
            .getSaved(searchTerm)
            .then(function (results) {};

            this.setState({results: myArray});
            console.log("saved results ", results.data);
        }
        .bind(this))

}, 

    render : function () {

        var searchStyle = {
            color: "white",
            fontSize: "24",
            backgroundColor: "rgba(28, 175, 237, 0.75)",
            fontFamily: "'Open Sans', sans-serif"
        };

        return (
            <div className="col-lg-8 col-lg-offset-2" style={searchStyle}>
                <form onSubmit={this.handleChange}>
                    <h1>Lets match you up with a nearby Chef.</h1>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="term">What type of cuisine are you feeling tonight?</label>
                        <input
                            type="text"
                            className="form-control"
                            id="term"
                            ref="search"
                            placeholder="Italian, Japanese, French"/>
                    </div>
                    <button type="submit" className="btn btn-default" id="searchBtn">Search</button>
                </form>
                <Display searchTerm={this.state.searchTerm} results={this.state.results}/>
            </div>
        )
    }
})

module.exports = Search;
