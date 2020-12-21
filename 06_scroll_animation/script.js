const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  triggerPoint = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    boxTop < triggerPoint
      ? box.classList.add("show")
      : box.classList.remove("show");
  });
}

checkBoxes();

// getBoundingClientRect
// The Element.getBoundingClientRect() method returns a DOMRect object providing information
//about the size of an element and its position relative to the viewport.
//The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels.
