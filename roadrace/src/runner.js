class Runner {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
  runSomeMiles(numMiles){
    this.milesRun = this.milesRun + numMiles;
    this.fitness = this.fitness + numMiles;
  }
  stretch(){
    this.fitness = this.fitness + .5;
  }
  runRace(raceName, miles){
    this.completedRaces.push(raceName);
    this.milesRun += miles;
    this.fitness += miles;
  }
}

module.exports = Runner;
