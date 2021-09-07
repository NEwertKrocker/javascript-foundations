class Direwolf {
  constructor(name, home, size){
    this.name = name;
    if (home == undefined){
      this.home = 'Beyond the Wall'
    } else {
      this.home = home;
    }
    if (size == undefined){
      this.size = 'Massive';
    } else {
      this.size = size;
    }
    this.starksToProtect = [];
    if (this.starksToProtect.length == 0){
      this.huntsWhiteWalkers = true;
    }
  }
  protect(starkName){
    if (starkName.location == this.home && this.starksToProtect.length < 2){
      this.starksToProtect.push(starkName);
      starkName.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }
  leave(starkName){
    starkName.safe = false;
    this.starksToProtect.pop(this.starksToProtect[starkName]);
  }
}

module.exports = Direwolf;
