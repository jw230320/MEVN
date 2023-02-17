<template>
  <canvas id="jsCanvas" class="canvas" style="background-color:white" width="500" height="500"
ref="canvas" @mousemove="dasd"></canvas>
<div>
   <input type="file" id="inputfile">
   <button id="jsgle" >글쓰기</button>
   <input type="text" id="jstext">
</div>
<div class="controls__btns">
   <button id="jsBrush" @click="grim()">브러쉬</button>
   <button id="jsErase" >지우기</button>
   <button onclick="">저장</button>
</div>
<div>1{{ startX }}</div>
<div>1{{ startY }}</div>
</template>

<script>
/* eslint-disable */ 
export default {
name: 'app',
data(){
return{
 startX:0,
 startY:0,
 gx:0,
 gy:0,
 drawing:false,
}
},
methods:{
dasd:function(e){

  this.startX = e.offsetX 
  this.startY = e.offsetY
},  
draw: function(curX,curY) {
context.beginPath()
context.moveTo(this.startX, this.startY)
context.lineTo(curX, curY)
context.stroke()
},
down:function (e) {
this.startX 
this.startY 
drawing = true
},
up:function (e) {
drawing = false
},
move:function (e) {
if (!this.drawing) return // 마우스가 눌러지지 않았으면 리턴
this.curX = this.startX,
this.curY = this.startY
draw(curX, curY)
this.startX = curX
this.startY = curY
},
out:function (e) {
drawing = false
},
grim:function () {
let canvas = document.getElementById('jsCanvas')
let context = canvas.getContext('2d')

context.lineWidth = 2 // 선 굵기를 2로 설정
context.strokeStyle = 'blue'

canvas.addEventListener(
'mousemove',
 this.move(),
// false
)
canvas.addEventListener(
'mousedown',

 this.down(),

false
)
canvas.addEventListener(
'mouseup',
 this.up(),

false
)
canvas.addEventListener(
'mouseout',
 this.out()
,
false
)
}

}
}
</script>
<style>

.canvas {
width: 500px;
height: 500px;
background-color: white;
border-radius: 15px;
box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0px 0px 3px rgba(0, 0, 0, 0.5);
position: relative;
}
.controls__btns button{
background-color: white;
padding: 5px 10px;
text-align: center;
border-radius: 5px;
box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
border: 2px solid rgba(0, 0, 0, 0.2);
color: rgba(0, 0, 0, 0.7);
}
#jsgle{
background-color: white;
padding: 5px 10px;
text-align: center;
border-radius: 5px;
box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
border: 2px solid rgba(0, 0, 0, 0.2);
color: rgba(0, 0, 0, 0.7);
}
@media (max-width:500px){
.canvas {
   width: 100%;
   height: 100%;
}
}

</style>