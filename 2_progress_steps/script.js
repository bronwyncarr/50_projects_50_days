const progress = document.querySelector('.progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')
let activeCircle = 1

function click() {
  // add active style to next number
  next.addEventListener('click', () => {
    if (activeCircle < circles.length) {
      activeCircle++
      circles[activeCircle-1].classList.add('active')
      progress.style.width = `${(activeCircle-1) / (circles.length -1) * 100}%`
      update()
    }
  })

  // remove active style then decrease number
  prev.addEventListener('click', () => {
    if (activeCircle > 1) {
      circles[activeCircle-1].classList.remove('active')
      activeCircle--
      update()
    }
  })
}

//moves progress bar and button logic to disable on first/last page
const update = () => {
  progress.style.width = `${(activeCircle-1) / (circles.length -1) * 100}%`
  if(activeCircle === 1) {
    prev.disabled = true
  } else if (activeCircle === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}

click()