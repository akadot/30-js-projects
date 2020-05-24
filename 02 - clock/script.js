const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const btn = document.querySelector(".btn");

function startClock() {
  const date = new Date();

  const newSeconds = date.getSeconds();
  const secondsDegrees = (newSeconds / 60) * 360 + 90;
  hours.style.transform = `rotate(${secondsDegrees}deg)`;

  const newMinutes = date.getMinutes();
  const minutesDegrees = (newMinutes / 60) * 360 + (newSeconds / 60) * 60 + 90;
  minutes.style.transform = `rotate(${minutesDegrees}deg)`;

  const newHours = date.getHours();
  const hoursDegrees = (newHours / 12) * 360 + (newMinutes / 60) * 30 + 90;
  hours.style.transform = `rotate(${hoursDegrees}deg)`;
}

btn.addEventListener("click", () => {
  setInterval(startClock, 1000);
});

startClock();

/**
 * function myVersion(){
 * let i = 5;
    setInterval(() => {
    hours.style.transform = `rotate(${i}deg)`;
    i = i + 5;

    if (i === 360) {
      clearInterval();
    }
  }, 1000);
 * }
 */
