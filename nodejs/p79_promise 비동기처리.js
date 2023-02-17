const job1 = ()=>{
    return new Promise((resolve,reject)=>{
        const delay = (Math.random()*1)+1
        setTimeout(()=>{
            console.log(`${delay.toFixed(1)}초만에 아메리카노 나왔습니다`)
            resolve(1)
        },delay)
    })
}
const job2 = ()=>{
    return new Promise((resolve,reject)=>{
        const delay = (Math.random()*1.5)+2
        setTimeout(()=>{
            console.log(`${delay.toFixed(1)}초만에 라뗴 나왔습니다`)
            resolve(2)
        },delay)
    })
}
const job3 = ()=>{
    return new Promise((resolve,reject)=>{
        const delay = (Math.random()*3)+2
        setTimeout(()=>{
            console.log(`${delay.toFixed(1)}초만에 카푸치노 나왔습니다`)
            resolve(3)
        },delay)
    })
}
const job4 = ()=>{
    return new Promise((resolve,reject)=>{
        const delay = (Math.random()*1)+2
        setTimeout(()=>{
            console.log(`${delay.toFixed(1)}초만에 비엔나 나왔습니다`)
            resolve(3)
        },delay)
    })
}
job1().then(job2).then(job3).then(job4)