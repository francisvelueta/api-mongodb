const { User } = require('./../models/user')

// exports controller to routes, from models
module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({})
    if (!users) return res.status(402).send({ message: 'User not found' })
    res.status(200).send(users)
  },
  newUser: async (req, res, next) => {
    const newUser = new User(req.body)
    const user = await newUser.save()
    if (!user)
      return res
        .status(403)
        .send({ message: 'User not created, something went wrong' })
    res.status(200).send(user)
  },
  getUser: async (req, res, next) => {
    const { userId } = req.params
    console.log(userId)
    const user = await User.findById(userId)
    if (!user) return res.status(404).send({ message: 'User not found' })
    res.status(200).send(user)
  },

  replaceUser: async (req, res, next) => {
    const { userId } = req.params
    const newUser = req.body
    const oldUser = await User.findByIdAndUpdate(userId, newUser)
    if (!oldUser)
      return res
        .status(405)
        .send({ message: 'User not replaced, something went wrong' })
    res.status(200).send({ sucess: true, message: 'User replaced' })
  },

  updateUser: async (req, res, next) => {
    const { userId } = req.params
    const newUser = req.body
    const oldUser = await User.findByIdAndUpdate(userId, newUser)
    if (!oldUser)
      return res
        .status(406)
        .send({ message: 'User not updated, something went wrong' })
    res.status(200).send({ sucess: true, message: 'User updated' })
  },

  deleteUser: async (req, res, next) => {
    const { userId } = req.params
    const user = await User.findByIdAndDelete(userId)
    if (!user)
      return res
        .status(407)
        .send({ message: 'User not deleted, something went wrong' })
    res.status(200).send({ sucess: true, message: 'User deleted' })
  }
}
