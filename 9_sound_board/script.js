const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const random = document.querySelector(".random-button");

function stopNoise() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopNoise();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

random.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * sounds.length);
  stopNoise();
  document.getElementById(sounds[randomNum]).play();
});
