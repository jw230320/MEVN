const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/main', (req, res) => {
    res.send('<h1>main 경로로 오신 것을 환영합니다.')
  })

  app.get('/main/asd', (req, res) => {
    res.send('asd 경로로 오신 것을 환영합니다.')
  })

app.listen(port, () => {
  console.log(`Success app listening on port ${port}`)
})