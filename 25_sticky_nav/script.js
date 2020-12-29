function fixNav() {
  const nav = document.querySelector('.nav')
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

window.addEventListener('scroll', fixNav)
