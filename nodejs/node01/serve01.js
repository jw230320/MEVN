const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()
/* 쿼리스트링 */
const port = 3000
const _path = path.join(__dirname, '/dist')
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.get('/test', function (req, res) {
  res.send(req.query.id + ' 그리고 ' + req.query.name)
})
app.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})