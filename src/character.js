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
