var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({ 

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

  pic: {
      type: String,
      required: "Please use a picture"
    },
    
  cuisine: {
    type: String,
    required: false
  }
});

// This creates our model from the above schema, using mongoose's model method.
var User = mongoose.model('User', UserSchema);

// finally, we export the module, allowing server.js to hook into it with a require statement.
module.exports = User;
