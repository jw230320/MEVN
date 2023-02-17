const async1 = param => {
    return new Promise((resolve, reject) =>{
        resolve(param*2)
    })
}
const async2 = param => {
    return new Promise((resolve, reject) =>{
        resolve(param*2)
    })
}
async1(1)
    .then(async2)
    .then(result=>{
        console.log(result) // 4
        throw '내맘이야 에러';})
    .catch(reason=>{
        console.log('이 promise는 '+reason+'로 종료 되었습니다.')})
    .finally(() => {
        console.log('로직을 종료합니다')})


// .then(result,reason)
