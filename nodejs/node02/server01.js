const express = require('express')
const path = require('path')
const logger = require('morgan')
const fs = require('fs')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/')
 console.log(_path)
 

app.use('/', express.static(_path))
app.use(logger('tiny'))
app.use(express.json())
app.use(
    express.urlencoded({
        extended : true
    })
)

app.post('/info', function(req, res){
    const age = req.body.age
    const name = req.body.name
    const idata = req.body.idata
    console.log(age, name, idata)
    const data = `이름${name}, 나이:${age}, 내용:${idata}`
    
    fs.appendFile(_path + name +'.txt', data,  (e) => {
    if(e) throw(e)
    res.send(`<script>alert("파일 저장완료!");</script>`)
})

})
app.get('/list', (req, res) =>{
    fs.readFile(_path + '1.txt', 'utf-8', (err, datas)=>{
        if (err) throw err
        res.send(datas)
    })
})

app.listen(port, () => {
    console.log(port + '서버 동작 완료.')
})