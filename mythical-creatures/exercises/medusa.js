var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name){
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim){
    var petrified = new Statue(victim.name);
    if (this.statues.length < 3){
      this.statues.push(petrified);
    } else {
      var person = new Person(this.statues[0].name);
      person.mood = 'relieved';
      this.statues.shift(petrified);
      this.statues.push(petrified);
      return person;
    }
  }
}

module.exports =
Medusa;
