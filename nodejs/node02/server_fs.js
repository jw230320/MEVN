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

//CRUD
app.post('/info', function(req, res){
    const age = req.body.age
    const name = req.body.name
    const idata = req.body.idata
    console.log(age, name, idata)
    const data = `이름${name}, 나이:${age}, 내용:${idata}`
    
    fs.stat(_path + name + '.txt' ,(err,stats)=>{
        
        if(stats){
            res.send(`<script>alert("${name}이 존재합니다 다른이름을 입력해주세요");history.go(-1)</script>`)
        }
        else{
        fs.writeFile(_path + name +'.txt', data,  (e) => {
            if(e) throw(e)
            res.send(`<script>alert("파일 저장완료!");history.go(-1)</script>`)
        })
    }

    })

})

app.listen(port, () => {
    console.log(port + '서버 동작 완료.')
})