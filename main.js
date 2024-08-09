const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minute = String(date.getMinutes()).padStart(2, "0");
const seconds = String(date.getSeconds()).padStart(2, "0");
const toDay = `${hours} : ${minute} : ${seconds}`;

let clock = document.getElementById("clock_id");
clock.innerHTML = toDay;

function runTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const toDay = `${hours} : ${minute} : ${seconds}`;

  let clock = document.getElementById("clock_id");
  clock.innerHTML = toDay;
}

setInterval(runTime, 1000);
