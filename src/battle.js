export class Battle {
  constructor(challengerOne, challengerTwo){
    this.challengerOne = challengerOne;
    this.challengerTwo = challengerTwo;
    this.battleTurn = 1;
  }

  characterOneAction(spell){
    if (this.battleTurn % 2 != 0)
    {
      this.challengerTwo.hp -= spell.hp;
      this.battleTurn += 1;
    }
  }

  characterTwoAction(spell){
    if (this.battleTurn % 2 == 0)
    {
      this.challengerOne.hp -= spell.hp;
      this.battleTurn += 1;
    }
  }
}
