// express set up
var express = require('express')
var app = express()
var port = process.env.PORT || 4000


// mongoose setup
var dbURI = 'mongodb://admin:admin@ds035796.mlab.com:35796/mymdb-wdi'
var mongoose = require('mongoose')
mongoose.connect(dbURI)

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('REALLY CONNECTED THIS TIME');
});

// setup body parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function(req,res) {
  res.send('homepage')
})

// require the movies_controller
var usersController = require('./controllers/users_controller')
app.use(usersController)

app.use(function (req, res) {
  res.send('error found')
})

app.listen(port, function () {
  console.log('app is running at ' + port)
})
