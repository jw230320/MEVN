const express = require('express');
const app = express();
const loogger = require('morgan');
const port = 3000;
app.use(loogger('tiny'))
const simple_module = require('./p192_컨트롤러설정하기1.js')
app.get('/',simple_module.intro)
app.get('/users/:userName/books/:bookName', simple_module.handleBook)


app.listen(port,()=>{
    console.log(port +'로 접속 되었습니다.')
})
