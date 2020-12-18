function variables() {
  const values = {
    progress: document.querySelector('.progress'),
    prev: document.querySelector('#prev'),
    next: document.querySelector('#next'),
    circles: document.querySelectorAll('.circle'),
    activeCircle: 1
  }
  return values
}

function click(variables) {
  let { progress, prev, next, circles, activeCircle } = variables()
  // add active style to next number
  next.addEventListener('click', () => {
    if (activeCircle < circles.length) {
      activeCircle++
      circles[activeCircle-1].classList.add('active')
      progress.style.width = `${(activeCircle-1) / (circles.length -1) * 100}%`
      update(progress, prev, next, circles, activeCircle)
    }
  })

  // remove active style then decrease number
  prev.addEventListener('click', () => {
    if (activeCircle > 1) {
      circles[activeCircle-1].classList.remove('active')
      activeCircle--
      update(progress, prev, next, circles, activeCircle)
    }
  })
}

//moves progress bar and button logic to disable on first/last page
const update = (progress, prev, next, circles, activeCircle) => {
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

click(variables)