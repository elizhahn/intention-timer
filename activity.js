class Activity {
  constructor(category, description, minutes, seconds) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = false;
    this.id = 0;
    this.timerRunning = false;
  };
  countdown() {
    if(this.timerRunning == true) {
      return;
    }
    var time = Number(this.minutes * 60) + Number(this.seconds);
      if(time > 1) {
    this.timerRunning = true;
    time--;
    var minutes = String(Math.trunc(time / 60)).padStart(2, 0);
    var seconds = String(Math.trunc(time % 60)).padStart(2, 0);
    timer.textContent = `${minutes}:${seconds}`;
    var decreaseTime = setInterval(function() {
      time--;
      var minutes = String(Math.trunc(time / 60)).padStart(2, 0);
      var seconds = String(Math.trunc(time % 60)).padStart(2, 0);
      timer.textContent = `${minutes}:${seconds}`;
      if(time === -1) {
        clearInterval(decreaseTime);
        this.timerRunning = false;
        displayMessage();
      }
    }, 1000);
  } else {
  timerButton.innerText = 'COMPLETE!'
  displayMessage();
  };
  };
  markComplete() {
      this.completed = true;
      if(localStorage.length === 0) {
        this.id = "storage " + 0;
      } else {
        this.id = "storage " + localStorage.length;
    };
  };

  saveToStorage() {
    var savedActivity = JSON.stringify(this);
    localStorage.setItem(this.id, savedActivity);
   };
  };
