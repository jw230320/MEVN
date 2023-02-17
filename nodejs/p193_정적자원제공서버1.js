const express = require('express');
const logger = require('morgan');
const app = express();
const port = 3000

app.use('/',express.static('d://kys//mevn//nodejs//p193')) // 정적 접근 폴더 지정
app.use(logger('tiny'))

app.listen(port,()=>{
    console.log(port+'로 연결 되었습니다')
})

