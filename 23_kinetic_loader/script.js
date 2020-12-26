const btn = document.getElementById("btn");
const triangles = document.getElementById("tri");

btn.addEventListener("click", (e) => {
  e.target.innerText = "Loading...";
  triangles.classList.add("kinetic");
  setTimeout(() => {
    e.target.innerText = "Loaded. Reload?";
    triangles.classList.remove("kinetic");
  }, 3000);
});
