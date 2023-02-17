const a = (c='나가자') => {
    return new Promise((resolve, reject) =>{
        // 비동기함수 로직
        setTimeout(()=>{
            resolve(`${c}`)
        },1*1000)
    })}
a()
.then(ret=>{
    console.log(ret)
    return a('싸우자')
})
.then(ret=>{
    console.log(ret)
    return a('이기자')
})
.then(ret=>{
    console.log(ret)  
})
