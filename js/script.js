function play(id) {
  const soundButton = document.getElementById(id);

  if (!soundButton) return;
  soundButton.classList.add("sound-button-play");

  const audio = soundButton.querySelector("audio");

  // toasty
  if (id == 0) {
    const toasty = document.querySelector(".toasty");
    if (!toasty.classList.contains("toasty-move")) {
      toasty.classList.toggle("toasty-move");

      setTimeout(() => toasty.classList.remove("toasty-move"), 1000);
    }
  } else {
    audio.currentTime = 0;
  }

  audio.play();

  setTimeout(() => soundButton.classList.remove("sound-button-play"), 200);
}

for (let i = 0; i <= 9; i++) {
  const soundButton = document.getElementById(i);
  soundButton.onclick = () => play(i);
}

document.addEventListener("keydown", (event) => {
  const id = event.key;
  play(id);
});

document.querySelector("#start").onclick = () => {
  document.querySelector("#welcome").classList.add("hidden");
  document.querySelector("#soundboard").classList.remove("hidden");
  const themeAudio = document.querySelector("#theme > audio");
  themeAudio.play();
  themeAudio.volume = 0.2;
};
