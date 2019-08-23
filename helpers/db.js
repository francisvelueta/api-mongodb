const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useNewUrlParser', true)

// Connection mongodb I'm using Atlas Cloud
const connecDB = (user, pass, host, env) =>
  `mongodb+srv://${user}:${pass}@${host}/${env}?retryWrites=true&w=majority`

module.exports = async () => {
  const { DB_USER, DB_PASS, DB_HOST, DB_ENV } = process.env
  try {
    const connect = await mongoose.connect(
      connecDB(DB_USER, DB_PASS, DB_HOST, DB_ENV)
    )
    if (connect) return console.log('Connect to Atlas')
  } catch (error) {
    throw new Error(error)
  }
}
