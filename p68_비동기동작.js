const job=()=>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log('난1번',b)
    },b)
}
const job2=()=>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log('난2번',b)
    },b)
}
const job3=()=>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log('난3번',b)
    },b)
}
job()
job2()
job3()
 