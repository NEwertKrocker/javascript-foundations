class Sphinx {
  constructor(){
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(newRiddle){
    this.riddles.push(newRiddle);
    if (this.riddles.length > 3){
      this.riddles.shift(this.riddles[0]);
    }
  }
  attemptAnswer(answerAttempt){
    for (var i = 0; i < this.riddles.length; i++){
      if (this.riddles[i].answer == answerAttempt && this.riddles.length == 1){
        this.riddles.splice(i, 1);
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answerAttempt}"???`
      } else if (this.riddles[i].answer == answerAttempt){
        this.riddles.splice(i, 1);
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      } else if (i == this.riddles.length - 1){
        this.heroesEaten++;
      }
    }
  }
}

module.exports = Sphinx;
