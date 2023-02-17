const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/dist')
 console.log(_path)

app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/pw', function(req, res) {
    res.send(`
    [비밀번호변경창]<br>
    ${req.query.id} 님 안녕하세요<br>
    ${req.query.id} 의 비밀번호를 수정하시겠어요?<br>
    ${req.query.id} ==> <a href"/inf">변경
    `)
})
app.listen(port, () => {
    console.log(port + '서버 동작 완료.')
})