var Skier = require('./Skier');

class Lift {
 constructor(numSeats){
   this.inService = true;
   this.limit = numSeats;
   this.skiers = [];
   this.safetyBar = 'up';
 }
 admitSkier(name, hasLiftTicket){
   var skier = new Skier(name, hasLiftTicket);
   if (this.skiers.length >= this.limit){
     return `Sorry, ${skier.name}. Please wait for the next lift!`
   } else if (!skier.hasLiftTicket){
     return `Sorry, ${skier.name}. You need a lift ticket!`
   } else {
     this.skiers.push(skier);
   }
 }
 startLift(){
   var remainingSeats = this.limit - this.skiers.length;
   if (this.skiers.length === this.limit){
     this.safetyBar = 'down';
   } else if (remainingSeats === 1){
     return `We still need 1 more skier!`
   } else {
     return `We still need ${remainingSeats} more skiers!`
   }
 }
}

module.exports = Lift;
