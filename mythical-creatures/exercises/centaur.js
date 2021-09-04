class Centaur {
  constructor(newCentaur){
    this.name = newCentaur.name;
    this.breed = newCentaur.type;
    this.cranky = false;
    this.crankyCounter = 0;
    this.standing = true;
    this.layingDown = false;
  }
  shootBow(){
    if (this.cranky == true || this.layingDown == true){
      return "NO!"
    } else if (this.crankyCounter < 3){
      this.crankyCounter++;
      this.crankyCheck();
      return 'Twang!!!';
    }
  }
  run(){
    if (this.cranky == true || this.layingDown == true){
      return "NO!"
    } else if (this.crankyCounter < 3){
      this.crankyCounter++;
      this.crankyCheck();
      return 'Clop clop clop clop!!!'
    }
  }
  sleep(){
    this.cranky = false;
    this.crankyCounter = 0;
    if (this.standing == true){
      return 'NO!'
    } else if (this.layingDown == true){
      return 'ZZZZ';
    }
  }
  layDown(){
    this.standing = false;
    this.layingDown = true;
  }
  standUp(){
    this.layingDown = false;
    this.standing = true;
  }
  drinkPotion(){
    if (this.standing == true){
    this.cranky = false;
    this.crankyCounter = 0;
    } else {
    return "Not while I'm laying down!";
    }
  }
  crankyCheck(){
    if (this.crankyCounter >= 3){
      this.cranky = true;
    }
  }
}

module.exports = Centaur;
