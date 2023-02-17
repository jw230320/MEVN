const express=require('express')
const app = express()
const logger = require('morgan')
const port = 3000
APP.use(logger('tiny'))
const simple_module =require('./simpep_modul.js')
app.get('/', simple_module.intro)
app.get('/users/:userName/books/:bookName', simple_module.handleBook)
app.listen(port,()=>{
    console.log(`서버가 생성되었습니다${port}`)
})