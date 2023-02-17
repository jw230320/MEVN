const Job1=()=>{
    const b = Math.random()*100;
    setTimeout(()=>{
        console.log("난 1번",b)
},b)}
const Job2=()=>{
    const b = Math.random()*100;
    setTimeout(()=>{
        console.log("난 2번",b)
},b)}
const Job3=()=>{
    const b = Math.random()*100;
    setTimeout(()=>{
        console.log("난 3번",b)
},b)}
Job1()
Job2()
Job3()