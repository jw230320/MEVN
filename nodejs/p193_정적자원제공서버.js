const express = require('express')
const logger = require('morgan')
const app = express()
const PORT= 3000
app.use('/', express.static('d://MEVN//MEVN//nodejs//p193'))//정적 접근 폴더 지정
app.use(logger('tiny'))
app.listen(PORT, ()=>{
    console.log(`너의 서버는? ${PORT}`)
})


