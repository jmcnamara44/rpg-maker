export class Item {
  constructor() {
    this.hpMod = 0;
    this.manaMod = 0;
    this.staminaMod = 0;
    this.experienceMod = 0;
  }
}

export class LightArmor extends Item {
  constructor(){
    super()
    this.hpMod = 10;
  }
}

export class Staff extends Item {
  constructor(){
    super()
    this.manaMod = 10;
  }
}

export class levelUpBook extends Item {
  constructor(){
    super()
    this.experienceMod = 1000;
  }
}
