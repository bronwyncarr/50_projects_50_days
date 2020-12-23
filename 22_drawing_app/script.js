const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');
let size = 10
let isPressed = false
let color = 'black'
let x
let y

// simulate putting pen down on page
// ispressed(pen is down) is true and gets the position of x and y relative to the canvas
canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

// simulates releasing pen
// isPressed to false and changes x & y to underfined.
canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = undefined
  y = undefined
})

// event listener when isPressed is true, simulates when holding down pen and moving, aka drawing
// happens with mouse down
// as long as ispRessed is true, draws circles, line between them and updates orginal x&y value so line is drawn between circles not from original origin. 
canvas.addEventListener('mousemove', (e) => {
  if(isPressed) {
      const x2 = e.offsetX
      const y2 = e.offsetY
      drawCircle(x2, y2)
      drawLine(x, y, x2, y2)
      x = x2
      y = y2
  }
})


// draw circle for pen point
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

// Draw lines
// Starts at x1 and y1 and draws a line from there to x2, y2
//  size *2 to give diameter of circle width, the same width as the circle
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

function updateSizeOnScreen() {
  sizeEL.innerText = size
}

// event listener to increase size by 5 with max size being 50px
increaseBtn.addEventListener('click', () => {
  size += 5
  if(size > 50) {
      size = 50
  }
  updateSizeOnScreen()
})

// event listener to decrease size by 5 with min size being 5px
decreaseBtn.addEventListener('click', () => {
  size -= 5
  if(size < 5) {
      size = 5
  }
  updateSizeOnScreen()
})

// Event listener to change colour to target/picked colour
colorEl.addEventListener('change', (e) => color = e.target.value)

// uses clearRect method to remove everything on the entire canvas height/width
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))

