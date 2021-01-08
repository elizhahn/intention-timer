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


categoryContainer.addEventListener("click", activateIcon);
buttonStartActivity.addEventListener('click', submitForm);
inputMinutes.addEventListener("keyup", validateNumberInputMinutes)
inputSeconds.addEventListener("keyup", validateNumberInputSeconds)


function displayTimer() {
  form.classList.add("hidden");
  containerTimer.classList.remove("hidden");
  var category;
  for (var i = 0; i < categoryInputs.length; i++){
    if(categoryInputs[i].checked) {
      category = categoryInputs[i].classList;
      console.log(category);
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


function activateIcon() {
  displayActivatedIcon(event);
}

function validateNumberInputMinutes(){
  validateNumberMinutes(event);
};

function validateNumberMinutes(event){
  if (!(event.keyCode >= 48 && event.keyCode <= 57) && !(event.keyCode >= 96 && event.keyCode <= 105) && !(event.keyCode == 8)){
    event.target.value = event.target.value.substring(0, event.target.value.length - 1);
  };
};

function validateNumberInputSeconds(){
  validateNumberSeconds(event);
};

function validateNumberSeconds(event){
  if (!(event.keyCode >= 48 && event.keyCode <= 57) && !(event.keyCode >= 96 && event.keyCode <= 105) && !(event.keyCode == 8)){
    event.target.value = event.target.value.substring(0, event.target.value.length - 1);
  };
};

function displayActivatedIcon(event) {
  for(var i = 0; i < categoryInputs.length; i++) {
    if(categoryInputs[i].checked) {
      iconActivated[i].classList.toggle('hidden');
      iconDeactivated[i].classList.toggle('hidden');
      currentIcon = categoryInputs[i];
    };
  };
};

function submitForm() {
  validateForm(event);
  displayTimer();
}

function validateForm(event) {
  event.preventDefault();
  if(currentIcon !== undefined) {
  var userCategory = currentIcon.id;
  var userActivity = inputActivity.value;
  var userMinutes = inputMinutes.value;
  var userSeconds = inputSeconds.value;
  checkInputs();
  var createdActivity = new Activity(userCategory, userActivity, userMinutes, userSeconds);
  createdActivities.push(createdActivity);
  createdActivity.countdown();
} else {
  showErrorMessage(0);
}
}

function checkInputs() {
  var inputs = [inputActivity, inputMinutes, inputSeconds];
  for(var i = 0; i < inputs.length; i++) {
    if(!inputs[i].value) {
      showErrorMessage(i + 1);
      break;
    }
  }
}

function showErrorMessage(index) {
  errorMessages[index].classList.remove('hidden');
}
