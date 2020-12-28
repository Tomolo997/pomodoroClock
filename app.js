const clock = document.querySelector(".clock");
const mainCon = document.querySelector(".mainContainer");
let minutes = 25;
let seconds = 00;
const pomodoroValue = document.querySelector(".settings__input--pomodoro");

const quickValue = document.querySelector(".settings__input--quickBreak");

const longValue = document.querySelector(".settings__input--longBreak");

const okButton = document.querySelector(".settings__ok");

const state = {
  pomodoro: {
    minutes: 25,
  },
  longBreak: {
    minutes: 15,
  },
  quickBreak: {
    minutes: 5,
  },
};

okButton.addEventListener("click", function () {
  state.pomodoro.minutes = pomodoroValue.value;
  state.quickBreak.minutes = quickValue.value;
  state.longBreak.minutes = longValue.value;
  settingsDiv.classList.add("hidden");
});
const updateNumbers = function (goal, value) {
  goal.textContent = value;
};

const init = function () {
  pomodoroValue.value = 25;
  quickValue.value = 5;
  longValue.value = 15;
  if (minutes < 10) {
    clock.textContent = `0${minutes}:0${seconds}`;
  } else {
    clock.textContent = `${pomodoroValue.value}:0${seconds}`;
  }
};

init();
let secondsOnScreen = "";
let minutesOnScreen = "";
const buttonStart = document.querySelector(".start");
const buttonStop = document.querySelector(".stop");
let timer = true;
let clockTime;
buttonStart.addEventListener("click", function () {
  buttonStop.classList.remove("hidden");
  buttonStart.classList.add("hidden");
  console.log(clock.textContent.split(":"));
  minutes = clock.textContent.split(":")[0];
  timer = true;
  if (pomodoroQuickBreak.classList.contains("pomodoro__active")) {
    minutesOnScreen = state.quickBreak.minutes;
  } else if (pomodoroLongBreak.classList.contains("pomodoro__active")) {
    minutesOnScreen = state.longBreak.minutes;
  } else if (pomodoroTime.classList.contains("pomodoro__active")) {
    minutesOnScreen = state.pomodoro.minutes;
  }
  if (timer) {
    clockTime = setInterval(() => {
      seconds--;
      secondsOnScreen = seconds;
      if (seconds < 10) {
        secondsOnScreen = "0" + seconds;
      } else {
        secondsOnScreen = seconds;
      }

      if (seconds <= 0 && seconds < 0) {
        secondsOnScreen = "59";
        minutes--;
        seconds = 59;
      }
      if (seconds === 0 && minutes === 0) {
        buttonStop.classList.remove("hidden");
        buttonStart.classList.add("hidden");
        alert("Time out");
        clearInterval(clockTime);
      }
      if (minutes < 10) {
        minutesOnScreen = "0" + minutes;
      } else {
        minutesOnScreen = minutes;
      }

      clock.textContent = `${minutesOnScreen}:${secondsOnScreen}`;
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
const main = document.querySelector(".main");
const pomodoroTime = document.querySelector(".pomodoro--time");
const pomodoroQuickBreak = document.querySelector(".pomodoro--quickBreak");
const pomodoroLongBreak = document.querySelector(".pomodoro--longBreak");
const pomodoroItem = document.querySelectorAll(".pomodoro__item");
pomodoroQuickBreak.addEventListener("click", function (e) {
  pomodoroTime.classList.remove("pomodoro__active");
  pomodoroLongBreak.classList.remove("pomodoro__active");
  e.target.classList.add("pomodoro__active");
  seconds = 0;
  pomodoroItem.forEach((el) => {
    el.style.backgroundColor = "rgba(70, 142, 145)";
    el.style.color = "white";
  });
  clock.textContent = `${state.quickBreak.minutes}:0${seconds}`;
  document.body.style.backgroundColor = "rgba(70, 142, 145,0.76)";
});

pomodoroTime.addEventListener("click", function (e) {
  pomodoroQuickBreak.classList.remove("pomodoro__active");
  pomodoroLongBreak.classList.remove("pomodoro__active");
  e.target.classList.add("pomodoro__active");
  seconds = 0;
  pomodoroItem.forEach((el) => {
    el.style.backgroundColor = "rgba(206, 101, 101, 0.76) ";
    el.style.color = "white";
  });
  clock.textContent = `${state.pomodoro.minutes}:0${seconds}`;
  document.body.style.backgroundColor = "rgba(206, 101, 101, 0.76)";
});
console.log(pomodoroItem);
pomodoroLongBreak.addEventListener("click", function (e) {
  pomodoroQuickBreak.classList.remove("pomodoro__active");
  pomodoroTime.classList.remove("pomodoro__active");
  e.target.classList.add("pomodoro__active");
  seconds = 0;
  pomodoroItem.forEach((el) => {
    el.style.backgroundColor = "rgba(67, 126, 168,0.76) ";
    el.style.color = "white";
  });

  clock.textContent = `${state.longBreak.minutes}:0${seconds}`;
  document.body.style.backgroundColor = "rgba(67, 126, 168,0.76)";
});

const settingsButton = document.querySelector(".header__link--settings");
const settingsDiv = document.querySelector(".settings");
settingsButton.addEventListener("click", function (e) {
  settingsDiv.classList.remove("hidden");
});

const settingsButtonClose = document.querySelector(".settings__close");

settingsButtonClose.addEventListener("click", function (e) {
  settingsDiv.classList.add("hidden");
});
