function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");

  audio.currentTime = 0;
  audio.play();
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeAnimation));

function removeAnimation(event) {
  if (event.propertyName !== "transform") return;

  this.classList.remove("playing");
}

window.addEventListener("keypress", playSound);
