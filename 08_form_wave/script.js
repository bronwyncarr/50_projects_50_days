// For each label split it into an array of individual letters
// then map over to add span to each letter
// then join back into a string of the label with a span tag around each letter.
// Transition delay based on index for wave effect.
(function () {
  const labels = document.querySelectorAll(".form-control label");

  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, index) =>
          `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
      )
      .join("");
  });
})();
