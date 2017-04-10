var express = require('express')
var router = express.Router()

//SET UP MOVIE model
var User = require('../models/user')


//GETS THE ENTIRE DATABASE
router.get('/user', function(req,res) {

  User.find({}, function(err, allUsers) {
    if(err) res.send(err)
    res.send(allUsers)
  })
})

//WRITES TO THE DATABASE
router.post('/user', function (req,res) {

  var newUser = new User (req.body)
  newUser.save(function (err,newUser) {
    if(err) res.send(err); // or next() plus function
    res.send(newUser)
  })
  // newMovie.name = req.body.name
  // newMovie.synopsis = req.body.synopsis
  // newMovie.rating = req.body.rating
})

module.exports = router
