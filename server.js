// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var mongoose = require('mongoose');

//Require History Schema
var User = require('./app/models/users.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect('mongodb://localhost/mychef');
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});
// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})



app.post('/create/users', function(req, res) {

  var newUser = new User(req.body);

  newUser.save(function(err, doc) {
    if(err) {
      console.log(err);
    }
    else {
      res.send(doc._id);
    }

  });

});

app.post('/retrieve', function(req, res) {
  var thing = req.body.term;

  console.log("Search thang " + thing)

  // var searchTerm = req.name;
  // console.log("This is a search " + searchTerm)
  	User.find({ 'cuisine' : thing })
		.exec(function(err, doc){
			if(err){
				console.log(err);
			}
			else {
				res.send(doc);
			}

		})
})


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
