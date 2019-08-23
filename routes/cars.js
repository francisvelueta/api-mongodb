const router = require('express').Router()

const { getUsersCars, newUserCar } = require('./../controllers/car')

// Methods for obtain cars in a user and add new car
router.get('/:userId/cars', getUsersCars)
router.post('/:userId/cars', newUserCar)

module.exports = router
