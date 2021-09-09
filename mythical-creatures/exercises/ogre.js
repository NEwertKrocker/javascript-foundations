class Ogre {
  constructor(ogre){
    this.name = ogre.name;
    if (ogre.abode == undefined){
      this.home = 'Swamp';
    } else {
      this.home = ogre.abode;
    }
    this.swings = 0;
  }
  swingAt(target){
      this.swings++;
      if (this.swings >= 2){
        target.knockedOut = true;
      }
  }
  encounter(human){
    human.encounterCounter++;
    if (human.noticesOgre()){
      this.swingAt(human);
    }
  }
  apologize(addressee){
    addressee.knockedOut = false;
  }
}

module.exports = Ogre;
