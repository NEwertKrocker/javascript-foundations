class Pirate {
  constructor(name, job){
    this.name = name;
    this.cursed = false;
    this.booty = 0
    this.curseCounter = 0;
    if (job === undefined){
      this.job = 'scallywag';
    } else {
      this.job = job;
    };
  }
  robShip(){
    if (this.booty < 500){
      this.booty = this.booty + 100;
    }
    if (this.curseCounter < 5){
      this.curseCounter = this.curseCounter + 1;
    return 'YAARRR!';
  } else {
    this.cursed = true;
    return 'ARG! I\'ve been cursed!';
  }
  }
  liftCurse(){
    if (this.cursed){
    this.booty = this.booty - 300;
    this.cursed = false;
    return "Your curse has been lifted!"
  } else {
    return "You don't need to lift a curse!"
  }
  }
}

module.exports = Pirate;
