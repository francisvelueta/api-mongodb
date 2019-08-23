const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: 'car'
    }
  ]
})
const User = model('user', userSchema)

module.exports = { User }
