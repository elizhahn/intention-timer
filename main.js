var iconDeactivated = document.querySelectorAll(".deactivated");
var iconActivated = document.querySelectorAll(".activated");
var categoryInputs = document.querySelectorAll(".category-input");
var categoryButtons = document.querySelectorAll(".category-label");
var categoryContainer = document.querySelector(".category-container");
var inputActivity = document.getElementById('activity');
var inputMinutes = document.getElementById("minutes");
var inputSeconds = document.getElementById("seconds");
var buttonStartActivity = document.querySelector(".activity-button");
var buttonTitles = document.querySelector('.button-title');
var errorMessages = document.querySelectorAll('.error-message');
var form = document.querySelector("form");
var containerTimer = document.querySelector(".timer-container");
var timer = document.querySelector(".timer");
var timerText = document.querySelector(".timer-activity-text");
var timerButton = document.querySelector(".timer-button");
var currentIcon;
var createdActivities = [];


categoryContainer.addEventListener("click", displayActivatedIcon);
buttonStartActivity.addEventListener('click', validateForm);
inputMinutes.addEventListener("keyup", validateNumberMinutes);
inputSeconds.addEventListener("keyup", validateNumberSeconds);
form.addEventListener("submit", function() {
  event.preventDefault();
})
timerButton.addEventListener('click', startCountdown);

function display(feature) {
  feature.classList.remove("hidden");
}

function hide(feature) {
  feature.classList.add("hidden");
}

//will need to change inputMinutes to createdActivity (obj instance) exstenion
function displayTimer() {
  hide(form);
  display(containerTimer);
  timerText.innerText = `${inputActivity.value}`
  timer.textContent = `${inputMinutes.value} : ${inputSeconds.value}`
  var category;
  for (var i = 0; i < categoryInputs.length; i++){
    if(categoryInputs[i].checked) {
      category = categoryInputs[i].classList;
    }
  }
    if(category.contains("study-box")) {
    timerButton.style.borderColor = "#B3FD78";
  }
    else if(category.contains("meditate-box")) {
    timerButton.style.borderColor = "#C278FD";
  }
    else {
    timerButton.style.borderColor = "#FD8078";
 }
}

// Should we combine these functions with a class??
function validateNumberMinutes(){
  if (!(event.keyCode >= 48 && event.keyCode <= 57) && !(event.keyCode >= 96 && event.keyCode <= 105) && !(event.keyCode == 8)){
    event.target.value = event.target.value.substring(0, event.target.value.length - 1);
  };
};

function validateNumberSeconds(){
  if (!(event.keyCode >= 48 && event.keyCode <= 57) && !(event.keyCode >= 96 && event.keyCode <= 105) && !(event.keyCode == 8)){
    event.target.value = event.target.value.substring(0, event.target.value.length - 1);
  };
};

function displayActivatedIcon() {
  for(var i = 0; i < categoryInputs.length; i++) {
    if(categoryInputs[i].checked) {
      iconActivated[i].classList.toggle('hidden');
      iconDeactivated[i].classList.toggle('hidden');
      currentIcon = categoryInputs[i];
    };
  };
};


function validateForm() {
  if(currentIcon === undefined) {
    showErrorMessage(0);
  }
  else if (!checkInputs()) {
    checkInputs();
  }
  else {
    var createdActivity = new Activity(currentIcon.id, inputActivity.value, inputMinutes.value, inputSeconds.value);
    createdActivities.unshift(createdActivity);
    //we will need to call this method on the start button listener instead
    //need to take displaly funcitonality and move it
    displayTimer();
  }
}

function checkInputs() {
  var inputs = [inputActivity, inputMinutes, inputSeconds];
  for(var i = 0; i < inputs.length; i++) {
    if(!inputs[i].value) {
      showErrorMessage(i + 1);
      return false
    }
  }
  return true;
}

function showErrorMessage(index) {
  errorMessages[index].classList.remove('hidden');
}

function startCountdown() {
  createdActivities[0].countdown();
}

// <span class="warning-icon"> <svg id="Capa_1" enable-background="new 0 0 551.14 551.14" height="512" viewBox="0 0 551.14 551.14" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m533.912 551.135h-516.684c-5.971 0-11.504-3.095-14.649-8.174s-3.431-11.403-.757-16.752l258.342-516.684c2.925-5.817 9.16-9.517 15.397-9.52 6.243-.003 12.488 3.697 15.415 9.52l258.342 516.685c2.674 5.349 2.388 11.672-.757 16.752-3.144 5.078-8.678 8.173-14.649 8.173zm-488.814-34.446h460.945l-230.474-460.944-230.473 460.944z" fill="#EFB7EC"/><path d="m258.347 206.678h34.446v172.228h-34.446z" fill="#EFB7EC"/><path d="m258.347 413.352h34.446v34.446h-34.446z" fill="#EFB7EC"/></svg> </span> A category is required</label>
// .error-message { color: #EFB7EC; } .warning-icon { height: 10px; width: 5px; }
