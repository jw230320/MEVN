const { Server } = require('socket.io')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const http = require('http')
const app = express()

const server = http.createServer(app)
const io = new Server(server)

const port = 3000
const _path = path.join(__dirname, './dist')
console.log(_path)
app.use('/', express.static(_path))
app.use(logger('tiny'))

io.on('connection', (socket) => {
  socket.on('chat', (msg) => {
    // 받을 내용
    io.emit('chat', msg) //보낼 내용
  })
})

server.listen(port, () => {
  console.log(port + '에서 서버 동작 완료.')
})
