// app.js
const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const brush = document.getElementById('jsBrush')
const erase = document.getElementById('jsErase')
const range = document.getElementById('jsRange')
const gle = document.getElementById('jsgle')

const INITIAL_COLOR = '#2c2c2c'
const INITIAL_LINEWIDTH = 5.0
const CANVAS_SIZE = 500

ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
ctx.lineWidth = INITIAL_LINEWIDTH
// canvas.width = CANVAS_SIZE
// canvas.height = CANVAS_SIZE

const { width, height } = canvas.getBoundingClientRect()
canvas.width = width
canvas.height = height

const MODE_BUTTON = [brush, erase, gle]
let mode = brush
let painting = false

function startPainting() {
  painting = true
}
function stopPainting() {
  painting = false
}

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
function gclcik(event) {
  gx = event.offsetX
  gy = event.offsetY
  if (mode === gle) {
    console.log(gx, gy)
  }
}

function handleModeChange(event) {
  mode = event.target
  // Button Highlight
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

document.getElementById('jstext').addEventListener('keyup', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  let text = document.getElementById('jstext').value

  ctx.font = '20pt BM YEONSUNG OTF'
  ctx.fillText(text, gx, gy)
})
