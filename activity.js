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
    console.log(time);
    var decreaseTime = setInterval(function() {
        var minutes = String(Math.trunc(time / 60)).padStart(2, 0)
        var seconds = String(Math.trunc(time % 60)).padStart(2, 0)
     //display complete on the buttonTitles
     timer.textContent = `${minutes}:${seconds}`;

      //decrease time
        time--;
      //clear timer



      //log activity button displays

    }, 1000);
  };
  markComplete(){
    console.log();
  };
  saveToStorage(){
    console.log();
  };
}
