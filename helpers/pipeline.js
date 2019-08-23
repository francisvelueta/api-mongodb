const express = require('express')
const cors = require('cors')
const error = require('./../middleware/error')
const helmet = require('helmet')

// Add middlewares to use
module.exports = app => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(helmet())
  if (app.get('env') === 'development') app.use(require('morgan')('dev'))
  app.get('/', (_, res) => res.send('Backend carsApp'))
  app.use('/api/users', require('./../routes/users'))
  app.use('/api/cars', require('./../routes/cars'))
  app.use(error)
}
