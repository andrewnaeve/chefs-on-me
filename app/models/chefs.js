
// first, we hook mongoose into the model with a require
var mongoose = require('mongoose');

// then, we save the mongoose.Schema class as simply "Schema"
var Schema = mongoose.Schema;
// with our new Schema class, we instantiate an ExampleSchema object.
// This is where we decide how our data must look before we accept it in the server
// and how to format it in mongoDB
var ChefSchema = new Schema({
  // string must be a string. We "trim" it to remove any trailing white space.
  // Notice that it is required, as well. It must be entered 
  // or else mongoose will throw an error.

  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  email: {
    type: String,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },

  password: {
    type: String,
    required: "Password is required"
  },

  address: {
    type: String,
    required: "Address is required"
  }
});

// This creates our model from the above schema, using mongoose's model method.
var Chef = mongoose.model('Chef', ChefSchema);

// finally, we export the module, allowing server.js to hook into it with a require statement.
module.exports = Chef;
