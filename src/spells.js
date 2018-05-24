export class Spells {
  constructor(){
    this.attack = 0;
    this.defend = 0;
    this.magic = 0;
  }
}

export class Attack extends Spells
{
  constructor() {
  super()
  this.attack = 10;
  }
}

export class Defend extends Spells
{
  constructor()
  {
    super()
    this.defend = 10;
  }
}
export class Magic extends Spells
{
  constructor()
  {
    super()
    this.magic = 20;
  }
}
