const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const _path =paht.join(_dirname, './dist')
app.use(express.static(_path))
app.listen(port, ()=> console.log(`포트폴리오 서버가 시작됩니다${port}`))
