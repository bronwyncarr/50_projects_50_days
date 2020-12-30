const button = document.getElementById('button')
button.addEventListener('click', () => createNotification("Time for Toast"))

const createNotification = (message, type=null) => {
  const toasts = document.getElementById('toasts')
  const newToast = document.createElement('div')

  // If no type is passed, a random one will be generated
  const typeGenerator = () => {
    const types = ["info", "warning", "caution", "message", "success"]
    randomNum = Math.floor(Math.random() * types.length)
    return types[randomNum]
  }
  
  // Add toast and type class list
  newToast.classList.add('toast')
  if (!type) {
    const randomType = typeGenerator()
    newToast.classList.add(randomType)
  } else {
    newToast.classList.add(type)
  }

  newToast.innerHTML = message
  toasts.appendChild(newToast)
  
  // Timeout to remove toasts
  setTimeout(() => {
    newToast.remove()
  }, 2500)
}