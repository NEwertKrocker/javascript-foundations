var Direwolf = require('./direwolf');

class Stark {
  constructor(person){
    if (person == undefined){
    } else {
      this.name = person.name;
    }
    if (person == undefined || person.area == undefined){
      this.location = 'Winterfell';
    } else {
      this.location = person.area;
    }
    this.safe = false;
  }
  sayHouseWords(){
    if (this.safe == false){
      return 'Winter is Coming';
    } else {
      return 'The North Remembers';
    }
  }
  callDirewolf(name, home){
    var calledDirewolf = new Direwolf(name, home);
    calledDirewolf.home = this.location;
    console.log(calledDirewolf);
    calledDirewolf.protect(this);
    return calledDirewolf;
  }
};

module.exports = Stark;
