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
    createdActivities.push(createdActivity);
    //we will need to call this method on the start button listener instead
    //need to take displaly funcitonality and move it
    createdActivity.countdown();
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
