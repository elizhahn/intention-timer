var buttonStartActivity = document.querySelector(".activity-button");
var form = document.querySelector("form");
var timer = document.querySelector(".timer-container");


buttonStartActivity.addEventListener("click", displayTimer);




function displayTimer(e) {
  e.preventDefault();
  form.classList.add("hidden");
  timer.classList.remove("hidden");
}
