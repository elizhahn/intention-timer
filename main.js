var iconDeactivated = document.querySelectorAll(".deactivated");
var iconActivated = document.querySelectorAll(".activated");
var categoryInputs = document.querySelectorAll(".category-input");
var categoryContainer = document.querySelector(".category-container");
var inputMinutes = document.getElementById("minutes");
var inputSeconds = document.getElementById("seconds");
var buttonStartActivity = document.querySelector(".activity-button")

categoryContainer.addEventListener("click", activateIcon);
inputMinutes.addEventListener("keyup", validateNumberMinutes)

function preventDefault(e){
  e.preventDefault();
}

function validateNumberMinutes(e){
  if (!(e.keyCode >= 49 && e.keyCode <= 57) && !(e.keyCode >= 96 && e.keyCode <= 105) &&){
    e.target.value = e.target.value.substring(0, e.target.value.length - 1);
  };
};

function activateIcon() {
  displayActivatedIcon(event);
}

function displayActivatedIcon(event) {
  console.log(event.target);
  for(var i = 0; i < categoryInputs.length; i++) {
    if(categoryInputs[i].checked) {
      iconDeactivated[i].classList.toggle("hidden");
      iconActivated[i].classList.toggle('hidden');
    };
  };
};
