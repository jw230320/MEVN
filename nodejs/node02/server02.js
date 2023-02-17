const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs=require('fs')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/')
 console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/files', (req, res)=>{
    fs.readdir(_path, 'utf-8', (err,data)=>{
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(port + '서버 동작 완료.')
})