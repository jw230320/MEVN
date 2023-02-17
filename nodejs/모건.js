// 터미널에 npm i morgan 으로 설치하기.

const express = require('express');
const app = express();
const loogger = require('morgan');
const PORT = 3000;

// 1번 로직
app.get('/', (req, res) => {
  res.send('<h1>이시빈: 민초는 인류 역사상 <mark>최악의 발명품!</mark></h1> -> /main 으로...')
})
app.get('/main', (req, res)=>{
  res.send('실론티는 <em>최고의 발명품</em> -> /more 으로...');
})
app.get('/main/more', (req, res)=>{
  res.send('실론티 한 박스 돌릴게요~');
})
app.use(loogger('tiny'));// 긴 로거 내용을 간단하게 출력한다.
app.use((req, res, next)=>{
  console.log('1 Time:', Date.now());
  next();
})
// 2번 로직
app.use((req, res, next)=>{
  console.log('2 Time:', Date.now());
  next();
})

app.listen(PORT, () => {
  console.log(`${PORT} 포트로 접속 완료!!`);
})

// 내 개인 포트는 7901번!
// 강사님 포트는 7900번.
// ds1234.iptime.org:포트번호 사용하면 접속할 수 있다.