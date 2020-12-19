(function () {
  const insert = document.getElementById("insert");
  const message = document.getElementById("message");
  const secret = document.getElementById("secret");

  window.addEventListener("keydown", (event) => {
    insert.innerHTML = `
    <div class="key">
      ${event.key === " " ? "Space" : event.key} <small>event.key</small>
    </div>
    <div class="key">
      ${event.keyCode}<small>event.keyCode</small>
    </div>
  `;
    message.textContent += `${event.key}`;
    secret.textContent += `${event.keyCode}.`;
  });
})();
