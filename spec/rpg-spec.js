import { Character } from './../src/character.js';
import { Warrior } from './../src/character.js';

describe('Character', function() {
  let reusableCharacter;

  beforeEach(function(){
    reusableCharacter = new Character ('Jon', 'Elf');
  });

  it('should test if character constructor works', function() {
    expect(reusableCharacter.hp).toEqual(50);
  });

  it('should test if warrior inherits character', function() {
    let newWarrior = new Warrior(reusableCharacter.name, reusableCharacter.race);

    expect(newWarrior.hp).toEqual(150);
    expect(newWarrior.stamina).toEqual(100);
  });
});
