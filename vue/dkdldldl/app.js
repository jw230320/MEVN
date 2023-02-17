// app.js
const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const brush = document.getElementById('jsBrush')
const erase = document.getElementById('jsErase')
const range = document.getElementById('jsRange')
const gle = document.getElementById('jsgle')

const INITIAL_COLOR = 'red'
const INITIAL_LINEWIDTH = 5.0
const CANVAS_SIZE = 500

ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = INITIAL_LINEWIDTH
canvas.width = CANVAS_SIZE
canvas.height = CANVAS_SIZE

const MODE_BUTTON = [brush, erase, gle]
let mode = brush
let painting = false

function startPainting() {
  painting = true
}
function stopPainting() {
  painting = false
}

//그리기 , 지우기 함수
function onMouseMove(event) {
  const x = event.offsetX
  const y = event.offsetY
  if (mode === brush) {
    if (!painting) {
      ctx.beginPath()
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
      ctx.stroke()
    }
  } else if (mode === erase) {
    if (painting) {
      ctx.clearRect(
        x - ctx.lineWidth / 2,
        y - ctx.lineWidth / 2,
        ctx.lineWidth,
        ctx.lineWidth
      )
    }
  }
}

let gx = 0
let gy = 0
//글쓰기 함수
function gclcik(event) {
  gx = event.offsetX
  gy = event.offsetY
  if (mode === gle) {
    console.log(gx, gy)
  }
  document.getElementById('jstext').addEventListener('keyup', function () {
    ctx.clearRect(0, 0, 500, 500)

    let text = document.getElementById('jstext').value

    ctx.font = '20pt BM YEONSUNG OTF'
    ctx.fillText(text, gx, gy)
  })
}
//버튼 클릭시 색깔변경
function handleModeChange(event) {
  mode = event.target
  for (i = 0; i < MODE_BUTTON.length; i++) {
    var button = MODE_BUTTON[i]
    if (button === mode) {
      button.style.backgroundColor = 'skyblue'
    } else {
      button.style.backgroundColor = 'white'
    }
  }
}

function handleRangeChange(event) {
  const size = event.target.value
  ctx.lineWidth = size
  range.value = size
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
  canvas.addEventListener('click', gclcik)
}
MODE_BUTTON.forEach((mode) => mode.addEventListener('click', handleModeChange))
range.addEventListener('input', handleRangeChange)

//텍스트입력
// document.getElementById('jstext').addEventListener('keyup', function () {
//   ctx.clearRect(0, 0, 500, 500)

//   let text = document.getElementById('jstext').value

//   ctx.font = '20pt BM YEONSUNG OTF'
//   ctx.fillText(text, gx, gy)
// })
//저장
function ww() {
  console.log(canvas)
  var canvasValue = canvas.toDataURL()
  console.log(canvasValue)
}
//이미지파일
function handleImageView(files) {
  var file = files[0]

  // if (!file.type.match(/image.*/)) {
  //   alert('not image file!')
  // }
  var reader = new FileReader()

  reader.onload = function (e) {
    var img = new Image()
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 320, 320)
    }
    img.src = e.target.result
  }

  reader.readAsDataURL(file)
}
//색깔함수
