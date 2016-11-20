var React = require('react');
var Display = require('./Display');



var Search = React.createClass({

    getInitialState: function() {
        return { searchTerm: '' }
    },

    changeState: function(newSearch) {
        this.setState({
            searchTerm: newSearch
        })
    },

    render: function () {
        return(

            <div>
                <form onSubmit={this.changeState}>

                    <div className="form-group">
                        <label htmlFor="term">Search Term:</label>
                        <input type="text" className="form-control" id="term" ref="search" />
                    </div>

                    <button type="submit" className="btn btn-default" id="searchBtn">Search</button>


                </form>

                <Display searchTerm={this.state.searchTerm} />

            </div>
        )
    }

})
// getInitialState () {
//     return { searctTerm: '' };
// },
    // handleChange: function(e) {
    //     var searchTerm = e.target.value;
    //     this.props.onChange(searchTerm)
    // },
    // onButtonClick (e) {
    //     this.setState({
    //         searchTerm: e
    //     });
    // },

    // onButtonClick (e) {
    //     e.preventDefault();
    //     var search = this.refs.search.value;
    //     this.props.onChange(search)
    //     alert(search)    

    // },





module.exports = Search;


