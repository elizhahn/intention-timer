var iconDeactivated = document.querySelectorAll(".deactivated");
var iconActivated = document.querySelectorAll(".activated");
var categoryInputs = document.querySelectorAll(".category-input");
var categoryContainer = document.querySelector(".category-container");
var inputMinutes = document.getElementById("minutes");
var inputSeconds = document.getElementById("seconds");
var buttonStartActivity = document.querySelector(".activity-button");
var buttonTitles = document.querySelector('.button-title');
var currentIcon;
var createdActivities = [];


categoryContainer.addEventListener("click", activateIcon);
buttonStartActivity.addEventListener('click', submitForm);

function preventDefault(e){
  e.preventDefault();
}

function activateIcon() {
  displayActivatedIcon(event);
}

function displayActivatedIcon(event) {
  for(var i = 0; i < categoryInputs.length; i++) {
    if(categoryInputs[i].checked) {
      iconDeactivated[i].classList.toggle("hidden");
      iconActivated[i].classList.toggle('hidden');
      currentIcon = categoryInputs[i];
    };
  };
};


function submitForm(e) {
  e.preventDefault();
  var userCategory = currentIcon.id;
  var userDescription = document.getElementById('activity').value;
  var userMinutes = document.getElementById('minutes').value;
  var userSeconds = document.getElementById('seconds').value;
  var createdActivity = new Activity(userCategory, userDescription, userMinutes, userSeconds);
  createdActivities.push(createdActivity);
}
