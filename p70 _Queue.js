class Queue{
    constructor(){
        this.a=[]
    }
    front(){
        if(this.a.length === 0){
            console.log('큐가 비었습니다.')
            return
        }else return this.a[0]
    }
    enq(value){
        this.a.push(value)
    }
    deq(){
        if(this.a.length===0){
            console.log('큐가 비었습니다.')
            return
        }
        this.a.shift()
    }
}
const q = new Queue()
q.enq(1)
q.enq(2)
q.enq(3)
q.enq(4)
q.enq(5)
for(let i=0; i<5; i++){
    console.log(q.front())
    q.deq()
}