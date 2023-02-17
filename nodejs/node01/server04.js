const express = require('express')
const path = require('path')
const logger = require('morgan')

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
    const id = req.body.id
    const name = req.body.name
    const idata = req.body.idata
    console.log(id, name, idata)
    res.send('확인되었습니다')


    // res.send('변경되었습니다.')
})

app.listen(port, () => {
    console.log(port + '서버 동작 완료.')
})