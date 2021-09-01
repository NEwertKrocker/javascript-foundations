class Magician {
  constructor(newMagician){
    this.name = `The Great ${newMagician.name}`;
    this.assistant = newMagician.assistant;
    if (newMagician.clothing === undefined){
      this.favoriteAccessory = 'top hat';
    } else {
      this.favoriteAccessory = newMagician.clothing;
    }
    this.confidencePercentage = 10;
  }
  performIncantation(incantationName){
    return `${incantationName.toUpperCase()}!`
  }
  performTrick(){
    this.confidencePercentage = this.confidencePercentage + 10;
    if (this.favoriteAccessory === 'top hat'){
    return `PULL RABBIT FROM TOP HAT`;
  } else {
    return `PULL DOVE FROM SLEEVE`
  }
  }
  performShowStopper(){
    if (this.confidencePercentage >= 100 && this.assistant === true){
      return `WOW! The magician totally just sawed that person in half!`
    } else {
      return `Oh no, this trick is not ready!`
    }
  }
}

module.exports = Magician;
