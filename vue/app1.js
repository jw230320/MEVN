//좌표설정,
var startX = 0,
  startY = 0 // 드래깅동안, 처음 마우스가 눌러진 좌표
var drawing = false
function draw(curX, curY) {
  context.beginPath()
  context.moveTo(startX, startY)
  context.lineTo(curX, curY)
  context.stroke()
}
function down(e) {
  startX = e.offsetX
  startY = e.offsetY
  drawing = true
}
function up(e) {
  drawing = false
}
function move(e) {
  if (!drawing) return // 마우스가 눌러지지 않았으면 리턴
  var curX = e.offsetX,
    curY = e.offsetY
  draw(curX, curY)
  startX = curX
  startY = curY
}
function out(e) {
  drawing = false
}
//그리기함수
function grim() {
  canvas = document.getElementById('jsCanvas')
  context = canvas.getContext('2d')

  context.lineWidth = 2 // 선 굵기를 2로 설정
  context.strokeStyle = 'blue'

  canvas.addEventListener(
    'mousemove',
    function (e) {
      move(e)
    },
    false
  )
  canvas.addEventListener(
    'mousedown',
    function (e) {
      down(e)
    },
    false
  )
  canvas.addEventListener(
    'mouseup',
    function (e) {
      up(e)
    },
    false
  )
  canvas.addEventListener(
    'mouseout',
    function (e) {
      out(e)
    },
    false
  )
}
//펜 색깔 함수

//지우기함수
function erase() {
  canvas = document.getElementById('jsCanvas')
  context = canvas.getContext('2d')

  context.clearRect(0, 0, 500, 500)
}
//이미지저장
function ww() {
  canvas = document.getElementById('jsCanvas')
  var canvasValue = canvas.toDataURL()
  console.log(canvasValue)
}
//이미지파일 업로드
function handleImageView(files) {
  canvas = document.getElementById('jsCanvas')
  context = canvas.getContext('2d')
  var file = files[0]
  var reader = new FileReader()

  reader.onload = function (e) {
    var img = new Image()
    img.onload = function () {
      context.drawImage(img, 0, 0, 320, 320)
    }
    img.src = e.target.result
  }

  reader.readAsDataURL(file)
}
document.getElementById('jsCanvas').addEventListener('click', gclcik)
//글쓰기함수
let gx = 0
let gy = 0
function gclcik(event) {
  canvas = document.getElementById('jsCanvas')
  context = canvas.getContext('2d')
  gx = event.offsetX
  gy = event.offsetY
  console.log(gx, gy)
}
function gg() {
  canvas = document.getElementById('jsCanvas')
  context = canvas.getContext('2d')
  document.getElementById('jstext').addEventListener('keyup', function () {
    context.clearRect(0, 0, 500, 500)

    let text = document.getElementById('jstext').value
    context.fillText(text, gx, gy)
  })
}
