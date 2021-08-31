class Hobbit {
  constructor(input) {
    this.name = input.name;
    this.age = 0;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday(){
    this.age = this.age + 1;
    if (this.age <= 32){
      this.adult = false
    } else if (this.age > 100){
    this.adult = true;
    this.old = true;
  } else {
    this.adult = true;
  }
  }
  getRing(){
    if (this.name === 'Frodo'){
      this.hasRing = true;
      return 'Here is the ring!'
    } else {
      return "You can't have it!"
    }
  }
}

module.exports = Hobbit;
