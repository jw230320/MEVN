class Queue{
    constructor(){
        this.a=[]
    }
    front(){
        if(this.a.length===0){
            console.log("Queue is empty(front)")
            return
        }else return this.a[0]
    }
    enq(value){
        this.a.push(value)
    }
    deq(){
        if(this.a.length===0){
            console.log("Queue is empty(deq)")
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
for(let i =0;i<6;i++){
    console.log(q.front()) // a에 있는 데이터중 첫번째를 보여줌
    q.deq() // a에 있는 첫번째 데이터를 삭제.
}