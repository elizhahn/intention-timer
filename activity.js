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
    timerText.innerText = `${this.description}`;
    setInterval(function() {
      var minutes = this.minutes.value;
      var seconds = this.seconds.value;
      timer.textContent = `${minutes} : ${seconds}`;

    });
  };
  markComplete(){
    console.log();
  };
  saveToStorage(){
    console.log();
  };
}
