const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const timeLocalEl = document.querySelector('.time-local')
const timeGmtEl = document.querySelector('.time-gmt')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// e.target targets what was clicked on(toggle btn). Same as toggle.textContent
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  html.classList.toggle('dark')
  if (html.classList.contains('dark')) {
    e.target.textContent = "Light Mode"
  } else {
    e.target.textContent = "Dark Mode"
  }
})

function setTime() {
  const time = new Date();
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const UTChours = time.getUTCHours()
  const UTCminutes = time.getUTCMinutes()
  const UTCseconds = time.getUTCSeconds()

  // Adds a zero at the start then slics off if there's more than 2 digits.
  function addZero(time) {
    time = (`0${time}`).slice(-2)
    return time
  }
  hourEl.style.transform = `translate(-50%, -100%) rotate(${hours * 30}deg)`
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`
  secondEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`

  timeLocalEl.textContent = `${hoursForClock}:${minutes} ${ampm}`
  dateEl.innerHTML = `${days[day]}, <span class="circle">${date}</span> ${months[month]} `
  
  timeGmtEl.textContent = `${addZero(UTChours)}:${addZero(UTCminutes)}: ${addZero(UTCseconds)} GMT`
}

setTime()
setInterval(setTime, 1000)