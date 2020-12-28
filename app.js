const clock = document.querySelector(".clock");
const mainCon = document.querySelector(".mainContainer");
let minutes = 25;
let seconds = 00;

const init = function () {
  clock.textContent = `${minutes}:0${seconds}`;
};

init();

const buttonStart = document.querySelector(".start");
const buttonStop = document.querySelector(".stop");
let timer = true;
let clockTime;
buttonStart.addEventListener("click", function () {
  buttonStop.classList.remove("hidden");
  buttonStop.style.translate = -20 + "px";
  buttonStart.classList.add("hidden");
  timer = true;
  if (timer) {
    clockTime = setInterval(() => {
      seconds--;

      let yea = "";
      yea = seconds;
      if (seconds < 10) {
        yea = "0" + seconds;
      } else {
        yea = seconds;
      }

      if (seconds <= 0 && seconds < 0) {
        yea = "59";
        minutes--;
        seconds = 59;
      }

      clock.textContent = `${minutes}:${yea}`;
    }, 1000);
  }
});

buttonStop.addEventListener("click", function () {
  buttonStop.classList.add("hidden");

  buttonStart.classList.remove("hidden");

  timer = false;
  if (!timer) {
    clearInterval(clockTime);
  }
});
