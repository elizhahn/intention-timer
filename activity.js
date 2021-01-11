class Activity {
  constructor(category, description, minutes, seconds, completed, id) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = completed;
    this.id = id;
    this.timerRunning = false;
  };
  countdown(){
    if(this.timerRunning == true){
      return;
    }
    var time = Number(this.minutes * 60) + Number(this.seconds)
    var decreaseTime = setInterval(function() {
      var minutes = String(Math.trunc(time / 60)).padStart(2, 0)
      var seconds = String(Math.trunc(time % 60)).padStart(2, 0)
      timer.textContent = `${minutes}:${seconds}`;
      time--;
      if(time === -1) {
        clearInterval(decreaseTime);
        this.timerRunning = false;
        timerButton.innerText = 'COMPLETE!';
        displayMessage();
      }
    }, 1000);
  };
  markComplete(){
    var card = document.createElement("li");
    pastActivityList.appendChild(card);
    card.classList.add("past-activity-card");
    card.innerHTML =
    `<article class="card">
         <li class="past-activity">
           <p class="past-activity-category">${this.category.charAt(0).toUpperCase() + this.category.slice(1)}</p>
           <div class="color-icon"></div>
        </li>
        <time class="past-activity-time">${this.minutes} MIN ${this.seconds} SECONDS</time>
        <li class="past-activity-description">
          <p>${this.description}</p>
        </li>
     </article>`
     pastActivities.push(this);
     showCardMarkerColor();
    }

  saveToStorage(){
    var savedActivity = JSON.stringify(this);
        if(localStorage.length === 0) {
          var key = "storage " + 0
          localStorage.setItem(key, savedActivity);
        } else {
          var key = "storage " + localStorage.length;
          localStorage.setItem(key, savedActivity);
        }
      };
  };
