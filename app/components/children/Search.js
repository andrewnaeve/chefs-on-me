var React = require('react');
var Display = require('./Display');
var helpers = require('../utils/helpers');


var Search = React.createClass({

    getInitialState: function() {
        return { 
                searchTerm: '',
                results: ''
            }
    },

    changeState: function(newSearch) {
        this.setState({
            searchTerm: newSearch
        })
    },

    handleChange: function (e) {

        e.preventDefault();
        var searchTerm = this.refs.search.value;
        console.log(searchTerm)
        this.changeState(searchTerm)

        helpers.getSaved(searchTerm)
            .then(function(results){



            var myArray = []
            for (var i = 0; i < results.data.length; i++) {
                myArray.push(
                    <div className="station">
                        name: {results.data[i].name}, email: {results.data[i].email}
                    </div>
                )
            };


                this.setState({
                    results: myArray
                });
                console.log("saved results ", results.data);
            }.bind(this))

    },



    render: function () {
        return(

            <div>
                <form onSubmit={this.handleChange}>

                    <div className="form-group">
                        <label htmlFor="term">Search Term:</label>
                        <input type="text" className="form-control" id="term" ref="search" />
                    </div>

                    <button type="submit" className="btn btn-default" id="searchBtn">Search</button>


                </form>

                <Display searchTerm={this.state.searchTerm} results={this.state.results}/>


            </div>
        )
    }

})


module.exports = Search;


