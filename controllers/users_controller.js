var express = require('express')
var router = express.Router()


//SET UP MOVIE model
var User = require('../models/user')

//ROUTE FOR FORMS
router.get('/users/new', function(req, res) {
  res.send('New User Created')
})

router.get('/users/:id/edit', function(req, res) {

  User.findById(req.params.id, function (err, User) {
    if (err) next()
    res.render('users/edit', {User})
  })
})



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

router.get('/users/:id', function(req, res) {
  res.send('individual user details on id ' + req.params.id)
})

router.put('/users/:id', function(req, res, next) {

  User.findByIdAndUpdate(req.params.id, req.body.user, function(err, updatedData) {
    if (err) next()
    res.redirect('/users/:id') //define a page
  })
})

router.post('/users/:id', function(req, res) {
  res.send('NOT HERE')
})

router.delete('/users/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, function (err, found) {
    if (err) throw (err)
    res.send('user deleted')
  })
})

module.exports = router
