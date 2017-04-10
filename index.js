// express set up
var express = require('express')
var app = express()
var port = process.env.PORT || 4000
var methodOverride = require('method-override')
// mongoose setup
var dbURI = process.env.PROD_MONGODB || 'mongodb://localhost:27017/mymdb'
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

//TRANSFORM FORM DATA TO REQ.BODY
app.use(bodyParser.urlencoded({extended:true}))
//TRANSFORM JSON TO REQ.BODY
app.use(bodyParser.json())

app.get('/', function(req,res) {
  res.send('homepage')
})

app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

// require the movies_controller
var usersController = require('./controllers/users_controller')
app.use(usersController)

// app.use(function (req, res) {
//   res.send('error found')
// })

app.listen(port, function () {
  console.log('app is running at ' + port)
})
