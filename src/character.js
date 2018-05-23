export class Character {
  constructor(name, race) {
    this.name = name;
    this.race = race;
    this.hp = 50;
    this.mana = 50;
    this.stamina = 50;
  }
}

export class Warrior extends Character {
  constructor(name, race) {
    super(name, race);
    this.hp += 100;
    this.stamina += 50;
  }
}
export class Wizard extends Character {
  constructor(name, race) {
    super(name, race);
    this.hp += 20;
    this.stamina += 10;
    this.mana += 100;
  }
}
export class Thief extends Character {
  constructor(name, race) {
    super(name, race);
    this.hp += 30;
    this.stamina += 100;
    this.mana += 10;
  }
}

export class Priest extends Character {
  constructor(name, race) {
    super(name, race);
    this.hp += 25;
    this.stamina += 10;
    this.mana += 110;
  }
}
