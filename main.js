var iconDeactivated = document.querySelectorAll(".deactivated");
var iconActivated = document.querySelectorAll(".activated");
var categoryInputs = document.querySelectorAll(".category-input");
var categoryContainer = document.querySelector(".category-container");
var inputMinutes = document.getElementById("minutes");
var inputSeconds = document.getElementById("seconds");
var buttonStartActivity = document.querySelector(".activity-button")

categoryContainer.addEventListener("click", activateIcon);
buttonStartActivity.addEventListener("click", validateNumber);

function preventDefault(e){
  e.preventDefault();
}

function validateNumber(){
  if(typeof(inputMinutes.value) !== "number" || typeof(inputSeconds) !== "number") {
    alert("yes");
  }
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
