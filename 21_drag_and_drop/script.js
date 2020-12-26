const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Event from the Drag & Drop JS API, functions given the same name
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// For all the empty boxes, adds all event lsiteners
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

// on drag box.
// adds hold class to this box for css
// removes image from previous box but after it's been grabbed (setTimeout to put on callback queue)
function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

// on drag box once dropped
function dragEnd() {
  this.className = "fill";
}

// on empty box prevent default
// default is to reset the current drap operation to none
function dragOver(e) {
  e.preventDefault();
}

// on empty box prevent defaulot and add hovered
//default is to reject immediate user selection as potential target
function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

// on empty box removes class
function dragLeave() {
  this.className = "empty";
}

// on empty box when dropping. empty it then add fill class
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
