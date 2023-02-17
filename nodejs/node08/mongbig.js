const mongoose = require('mongoose')
const USER = 'tm'
const PWD = '1234'
const HOST = '127.0.0.1:27017'
const DB = 'team'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
mongoose.set('strictQuery', false)
mongoose
  .connect(mongodbURL, { useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))
const o1 = require('./stock.js')
module.exports = { mongoose, o1 }
