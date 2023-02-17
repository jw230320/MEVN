const a = (c='네이버')=>{
    return new Promise((resolve, reject) =>{
        // throw new Error('[내부에러1]')  // 에러 방법1
        // reject(new Error('[내부에러2]')) // 에러 방법2
        // resolve('난정상이야') // 에러 방법3
        reject(`[내부에러3]`)
        setTimeout(() =>
        resolve(`${c}로부터 받은 사랑`),1000)
    })
}
a().then(ret=>{
    return a('카카오')
}).then(ret=>{
    console.log(ret)
}).catch(err=>{
    console.log(err+'발생!!!')
})