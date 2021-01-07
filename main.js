var iconDeactivated = document.querySelectorAll(".deactivated");
var iconActivated = document.querySelectorAll(".activated");
var categoryInputs = document.querySelectorAll(".category-input");
var categoryContainer = document.querySelector(".category-container");


categoryContainer.addEventListener("click", activateIcon);

function activateIcon(event) {
  console.log(event.target);
  for(var i = 0; i < categoryInputs.length; i++) {
    if(categoryInputs[i].checked) {
      iconDeactivated[i].classList.toggle("hidden");
      iconActivated[i].classList.toggle('hidden');
    }
  }
}
