const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const full = document.getElementById("full");
const remained = document.getElementById("remained");

// Initial call to update bigcup
updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(index) {
  // When clicking on the last full cup should be able to remove full class.
  // Test is the class is full but if the one next to it isn't to see if it is the last one.
  // If so decreases the index by one to remove full.
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  // Nested loop checks all other cups to see if they're index is smaller than the selected one.
  // If so they will also get the full or remove the full class.
  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  // If there is a change to small cup update big cup.
  updateBigCup();
}

// Update big cup function
function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length; // how many are full?
  const totalCups = smallCups.length; // total num of cups

  if (fullCups === 0) {
    // If no cups are full
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    // If at least one cup is full
    // multiple by height of big cup 330px
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  // Removes remaining if full
  // Otherwise remaining with % is shown
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
