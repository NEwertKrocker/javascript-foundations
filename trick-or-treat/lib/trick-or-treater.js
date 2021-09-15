class TrickOrTreater {
  constructor(costume, bag){
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candy){
    this.hasCandy = true;
    this.bag.candies.push(candy);
    this.bag.count++;
    this.countCandies++;
  }
  eat(){
    this.bag.candies.pop();
    this.bag.count--;
    this.countCandies--;
  }
};

module.exports = TrickOrTreater;
