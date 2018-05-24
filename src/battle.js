export class Battle {
  constructor(challengerOne, challengerTwo){
    this.challengerOne = challengerOne;
    this.challengerTwo = challengerTwo;
    this.battleTurn = 1;
  }

  characterOneAction(spell){
    this.challengerTwo.hp -= this.attack;
    this.challengerOne.hp += this.defend;
    this.challengerTwo.hp -= this.magic;
  }

  characterTwoAction(spell){
    this.challengerOne.hp -= this.attack;
    this.challengerTwo.hp += this.defend;
    this.challengerOne.hp -= this.magic;
  }

  battling(){
    while ((this.challengerOne.hp > 0) && (this.challengerTwo.hp > 0)) {
      if (this.battleTurn % 2 === 0) {
        this.challengerOneAction()
        this.battleTurn += 1;
      } else if (this.battleTurn % 2 !== 0) {
        this.characterTwoAction();
        this.battleTurn += 1;
      }
    }
    if (this.challengerOne.hp <= 0 || this.challengerTwo.hp <= 0) {
      return 'Battle Over!';
    }
  }
}
