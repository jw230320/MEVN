const http = require('http')
const PORT = 12010
const server = http.createServer((req,res)=>{
    res.setHeader('content-type', 'text/plain; charset=utf-8')
    res.end(JSON.stringify(obj))
})
setTimeout(()=>{
JSON.parse("{[")
},3000)

server.listen(PORT,()=>{
    console.log(`${PORT}의 포트에서 서버가 가동됨`)
})