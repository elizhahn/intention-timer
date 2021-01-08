class Activity {
  constructor(category, description, minutes, seconds, completed, id) {
    this.category = category;
    this.description = description;
<<<<<<< HEAD
    this.seconds = minutes;
    this.completed = seconds;
=======
    this.minutes = minutes;
    this.seconds = seconds;
    this.completed = completed;
>>>>>>> main
    this.id = id;
  };
  countdown(){
    console.log();
  };
  markComplete(){
    console.log();
  };
  saveToStorage(){
    console.log();
  };
}
