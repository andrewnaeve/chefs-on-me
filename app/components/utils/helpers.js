// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');


// Helper Functions (in this case the only one is runQuery)
var helpers = {

	postSaved: function(name, email, password){
		console.log("WTF")
		var name = name;
		var email = email;
		var password = password;

		var newUser = {name, email, password};
		return axios.post('/create/users', newUser)

			.then(function(results){

				console.log("axios results", results._id);

				return results._id;
			})

	}
};

// We export the helpers function 
module.exports = helpers;