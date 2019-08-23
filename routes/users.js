const router = require('express').Router()
const {
  index,
  newUser,
  getUser,
  replaceUser,
  deleteUser
} = require('./../controllers/user')

router.get('/', index)
router.get('/:userId', getUser)
router.post('/', newUser)
router.put('/:userId', replaceUser)
router.delete('/:userId', deleteUser)

module.exports = router
