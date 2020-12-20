//IIFE that commences and has event listener for input field
(function start() {
  const textarea = document.getElementById("textarea");
  textarea.focus();
  generateHeader();

  //event listener on text area. Calls createTags and randomSelect.
  textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = "";
      }, 10);
      randomSelect();
    }
  });
})();

// As user types, input is filtered for spaces or emtpy entries.
// Tags are created seperated by ,
// Generate spans is called to turn tags into span elements appended to #tags.
function createTags(input) {
  const tagsElement = document.getElementById("tags");
  const tags = input
    .split(",")
    .map((word) => word.trim())
    .filter((word) => word.trim() !== "");
  tagsElement.innerHTML = "";
  generateSpans(tags, "tag", tagsElement);
}

function randomSelect() {
  const times = 30;
  // causes flicking through tags.
  // set interval highlights tag then 0.1s later unhighlights tag.
  // 50ms later repeats
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    const letter = pickRandomLetter();
    highlightTag(randomTag, letter);
    setTimeout(() => {
      unhighlightTag(randomTag, letter);
    }, 100);
  }, 100);

  // causes flicking to stop then calls random tag once to choose a random tag to finish on.
  // that colour is returned and set to the heading colour.
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      const lastColor = highlightTag(randomTag);
      const heading = document.querySelectorAll(".letter");
      heading.forEach((letter) => (letter.style.color = lastColor));
    }, 100);
  }, times * 100);
}

// Generate Header
function generateHeader() {
  const titleString = "Random Picker";
  const heading = document.querySelector("h1");
  const toSpan = titleString.split("");
  generateSpans(toSpan, "letter", heading);
}

// Function takes an array, class and position.
// Turns each element into a HTML span with a class then appends it to a position.
function generateSpans(toSpan, toClass, toWhere) {
  toSpan.forEach((element) => {
    const newElement = document.createElement("span");
    newElement.classList.add(toClass);
    newElement.innerHTML = element;
    toWhere.appendChild(newElement);
  });
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function pickRandomLetter() {
  const letter = document.querySelectorAll(".letter");
  return letter[Math.floor(Math.random() * letter.length)];
}

function highlightTag(tag, letter) {
  const colours = ["red", "lightgreen", "dodgerblue", "yellow", "plum", "magenta", "tomato", "cyan"];
  const colour = colours[Math.floor(Math.random() * colours.length)];
  tag.style.backgroundColor = colour;
  if (letter) {
    letter.style.color = colour;
  }
  return tag.style.backgroundColor;
}

function unhighlightTag(tag, letter) {
  tag.style.backgroundColor = "lightslategrey";
  if (letter) {
    letter.style.color = "white";
  }
}
