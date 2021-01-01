const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'
let idx = 1
let speed = 300 / speedEl.value
let forward = true

function writeText() {
  const textEl = document.getElementById('text')
  textEl.innerHTML = `<h1>${text.slice(0, idx)}<span>|</span></h1>`
  
  if(idx < text.length && forward) {
    idx++
  } else if (idx === text.length) {
    forward = !forward
    idx--
  } else if (idx === 0) {
    forward = !forward
    idx++
  } else if(idx < text.length) {
    idx--
  } 
  setTimeout(writeText, speed)

}

writeText()

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
