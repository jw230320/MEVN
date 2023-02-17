const express = require('express')
const path = require('path')
const logger = require('morgan')

const app = express()
const port = 3000
const _path = path.join(__dirname, '/dist')
 console.log(_path)

 app.get('/story', function (req, res) {
    const arr=['my life is pretty', 'Egg is Life', 'Cute & I do not have cat', 'Avengers are Dead']
    const pick=`
    <h2>
        <ul>
            <LI><a href="/story?id=1">pretty</a></LI>
            <LI><a href="/story?id=2">egg</a></LI>
            <LI><a href="/story?id=3">dog &cat</a></LI>
            <li><a href="/story?id=4">avengers</a></li>
        </ul>
    </h2>
    <h1>${arr[req.query.id] ?? '선택하세요.'}</h1>`
// res.send(arr[req.query.id])
res.send(pick)
 })
app.use('/', express.static(_path))
app.use(logger('tiny'))
app.listen(port, () => {
    console.log(port + '서버 동작 완료.')
})