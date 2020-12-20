const btn = document.querySelector('.icon')
const nav = document.getElementById('nav')

btn.addEventListener('click', () => {
  nav.classList.toggle('active')
})