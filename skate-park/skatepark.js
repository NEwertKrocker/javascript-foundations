class SkatePark {
  constructor(park){
    this.name = park.name;
    this.yearFounded = park.year;
    this.style = park.type;
    this.features = park.features;
    this.cost = 0;
    this.occupants = [];
    if (park.isPrivate){
      this.isPrivate = true;
    } else {
      this.isPrivate = false;
    }
    if (park.price){
      this.cost = park.price;
    }
  }
  admit(skater){
    if (this.occupants.length >= 3){
      return `Sorry, we are at max capacity. Thank you for understanding.`
    } else if (!this.isPrivate){
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    } else if (this.isPrivate && skater.money < this.cost){
      return `Sorry, you don't have enough money.`
    } else if (this.isPrivate){
      skater.money = skater.money - this.cost;
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    }
  }
}

module.exports = SkatePark;
