var mongoose = require ('mongoose')

var userSchema = new mongoose.Schema ( {
  name: {
    type: String,
    required: [true, 'Name cannot be empty'],
    maxlength: [20, 'Name can only be up to 20 characters long']
  },
  password: String,
  email: String
})

var User= mongoose.model('User', userSchema)


module.exports = User
