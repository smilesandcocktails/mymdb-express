var express = require('express')
var app = express()
var port = 4000

app.use(function (req, res, next) {
  console.log('%s %s', req.method, req.url)
  next()
})

app.get('/', function (req, res, next) {
  if (req.query.name === 'prima') next()
  res.send('Hello World!')
})

app.use(function (req, res, next) {
  res.send('stop middleware')
})

app.get('/', function (req, res, next) {
  res.send('Hey hey hey ' + req.query.name)
})

// takes in request
// if name in req.query is prima ==> stop middleware
// if not, then go next
// app.use(function (req, res, next) {
//   if (req.query.name === 'prima') {
//     res.send('prima found')
//   } else {
//     next()
//   }
// })
// // call the next function
//
// app.get(function (req, res, next) {
//   console.log('processing another request')
//   res.send('second middleware')
// })
//
// // app.get(function(req, res) { // no next
// //
// // })

app.listen(port, function () {
  console.log('app is running at ' + port)
})
