// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');


// Helper Functions (in this case the only one is runQuery)
var helpers = {

	postSaved: function(name, email, password, pic, cuisine){
		console.log("WTF")
		var name = name;
		var email = email;
		var password = password;
		var pic = pic;
		var cuisine = cuisine;

		var guy = {name, email, password, pic, cuisine};
		console.log(guy)
		return axios.post('/create/users', guy)
		console.log("GGGf")

			.then(function(results){

				console.log("Shit got saved");

				return results._id;
			})

		},

	getSaved: function(searchTerm) {

		var searchTerm = {"term" : searchTerm};

		return axios.post('/retrieve', searchTerm)

			.then(function(results) {
				console.log("hi")
				return results;
			})	
	},


};

// We export the helpers function 
module.exports = helpers;