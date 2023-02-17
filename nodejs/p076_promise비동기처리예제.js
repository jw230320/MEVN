// 주문 받은대로 처리하기
// 주문1) ex 1.7 초만에 아메리카노 나왔습니다!   1초 ~ 2초
// 주문2) ex 3.5 초만에 라떼 나왔습니다!!        2초 ~ 3.5초
// 주문3) ex 3.6 초만에 카푸치노 나왔습니다!     3초 ~ 5초
// 주문4) ex 2.2 초만에  비엔나 나왔습니다!      2초 ~ 3초
const aa = ()=>{
    return new Promise((resolve, reject)=>{
        const random = Math.random()*1000 +1000
        setTimeout(()=>{
            console.log((random/1000).toFixed(2)+'초만에 아메리카노 나왔습니다.')
            resolve('job1')
        },random)
    })    
}
const la = ()=>{
    return new Promise((resolve, reject)=>{
        const random = Math.random()*1500 +2000
        setTimeout(()=>{
            console.log((random/1000).toFixed(2)+'초만에 라떼 나왔습니다.')
            resolve('job1')
        },random)
    })  
}
const capu = ()=>{
    return new Promise((resolve, reject)=>{
        const random = Math.random()*2000 +3000
        setTimeout(()=>{
            console.log((random/1000).toFixed(2)+'초만에 카푸치노 나왔습니다.')
            resolve('job1')
        },random)
    })  
}
const vie = ()=>{
    return new Promise((resolve, reject)=>{
        const random = Math.random()*1000 +2000
        setTimeout(()=>{
            console.log((random/1000).toFixed(2)+'초만에 비엔나커피 나왔습니다.')
            resolve('job1')
        },random)
    })  
}
aa().then(la).then(capu).then(vie)    