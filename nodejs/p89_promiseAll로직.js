const async=(message,ret)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(message)
            console.log(new Date())
            resolve(ret)
        },2000)
    })
}
const Promises = [async("비동기함수1발동",1),async('비동기함수2발동',2)]