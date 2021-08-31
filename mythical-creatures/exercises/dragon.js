class Dragon {
  constructor(name, rider){
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.mealsEaten = 0;
    }
  greet() {
    return `Hi, ${this.rider}!`;
    };
  eat() {
    this.mealsEaten = this.mealsEaten + 1;
    if (this.mealsEaten > 2){
      this.hungry = false;
    }
  };
};

module.exports = Dragon;
