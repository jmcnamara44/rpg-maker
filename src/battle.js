export class Battle {
  constructor(challengerOne, challengerTwo){
    this.challengerOne = challengerOne;
    this.challengerTwo = challengerTwo;
    this.battleTurn = 1;
  }

  characterOneAction(spell){
    this.challengerTwo.hp -= spell.hp;
  }

  characterTwoAction(spell){
    this.challengerOne.hp -= spell.hp;
  }
}
