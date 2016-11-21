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
        var searchStyle = {
            color: "white",
            fontSize: "24",
            backgroundColor: "rgba(28, 175, 237, 0.75)",
            fontFamily: "'Open Sans', sans-serif"
        };
        return(

            <div className="col-lg-8 col-lg-offset-2" style={searchStyle}>
                <form onSubmit={this.changeState}>
                    <h1>Let's match you up with a nearby Chef.</h1>
                    <div className="form-group">
                        <label htmlFor="term">What type of cuisine are you feeling tonight?</label>
                        <input type="text" className="form-control" id="term" ref="search" placeholder="Italian, Japanese, French" />
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


