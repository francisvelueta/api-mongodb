const { Car } = require('./../models/car')
const { User } = require('./../models/user')

module.exports = {
  getUsersCars: async (req, res, next) => {
    const { userId } = req.params
    // Added populate to show info cars complete in query by user
    const cars = await User.findById(userId).populate('cars')
    if (!cars) return res.status(407).send({ message: 'User not find' })
    res.status(200).send(cars)
  },
  newUserCar: async (req, res, next) => {
    const { userId } = req.params
    const newCar = new Car(req.body)
    const user = await User.findById(userId)
    newCar.seller = user
    await newCar.save()
    user.cars.push(newCar)
    const saveUser = await user.save()
    if (!saveUser) return res.status(408).send({ message: 'Error in add car' })
    res.status(200).send(newCar)
  }
}
