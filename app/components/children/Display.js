var React = require('react');

var Display = React.createClass({


    render: function() {

        var searchTerm = this.props.searchTerm; 
        var results = this.props.results;
        console.log(searchTerm)
        console.log("Hi results ")
        var card = {
        width: 200
        };        

        if(this.props.results === '') {
            return(
                <div>
                    <h1>hi</h1>
                </div>
            )
        }
            else {
                var result = this.props.results.data.map(function(result, index){
                return (
                    <div key={index}>
                        <div className="row">
                            <div className="col-md-4">
                                <h2>{result.name}</h2>
                            </div>
                            <div>
                                <h3><img src={result.pic} style={card}/></h3>
                            </div>
                            <div>
                                <h3>{result.cuisine}</h3>
                            </div>                                
                        </div>
                    </div>
                )
            }.bind(this))
        }
        return(
            <div>
                {result}
            </div>
        )
    }      
})

module.exports = Display;
