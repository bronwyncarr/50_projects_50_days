// access button
const inside = document.querySelector(".inside");
const outside = document.querySelector(".outside");

// Add event listener to button which will call makeRipple() every 50ms.
// After 50ms * times, interval will be cleared
outside.addEventListener("click", function (e) {
  const times = 20;
  const interval = setInterval(() => {
    makeRipple();
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
  }, 50 * times);
});

// Make ripple function gets random x and y position within window size
// Creates span element with class circle with that x and y position.
//setTimeout removes the span after 500ms so they don't accumulate in the DOM.
function makeRipple() {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.left = x + "px";
  circle.style.top = y + "px";

  document.body.appendChild(circle);
  setTimeout(() => circle.remove(), 500);
}

//Logic for ripple in button instead of on background.

inside.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
});
