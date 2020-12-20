(function() {
  const btn = document.querySelectorAll(".faq-toggle");

  // const faq = document.querySelectorAll(".faq");
  // btn.forEach((btn, index) => {
  //   btn.addEventListener("click", () => {
  //     faq[index].classList.toggle("active");
  //   });
  // });

  btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentNode.classList.toggle("active")
    })
  })
})()
