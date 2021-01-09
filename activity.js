class Activity {
  constructor(category, description, minutes, seconds, completed, id) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = completed;
    this.id = id;
  };
  countdown(){
    var time = Number(this.minutes * 60) + Number(this.seconds)
    var decreaseTime = setInterval(function() {
      var minutes = String(Math.trunc(time / 60)).padStart(2, 0)
      var seconds = String(Math.trunc(time % 60)).padStart(2, 0)
      timer.textContent = `${minutes}:${seconds}`;
      time--;
      if(time === -1) {
        clearInterval(decreaseTime);
        timerButton.innerText = 'COMPLETE!';
        alert(`Congratulations on finishing your session!`);
      }
    }, 1000);
  };
  markComplete(){
    console.log();
  };
  saveToStorage(){
    console.log();
  };
}
