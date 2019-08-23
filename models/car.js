const { Schema, model } = require('mongoose')

const carSchema = new Schema({
  make: String,
  model: String,
  year: Number,
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

const Car = model('car', carSchema)
module.exports = { Car }
