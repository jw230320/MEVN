const job1=()=>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log(1)
        job2()},b)
}
const job2=()=>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log(2)
        job3()},b)
}
const job3=()=>{
    const b = Math.random()*100
    setTimeout(()=>{
        console.log(3)},b)
}
job1() // 연쇄반응을 이용하여 맨 앞 함수만 호출