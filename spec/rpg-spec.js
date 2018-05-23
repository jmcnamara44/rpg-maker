import { Character } from './../src/character.js';
import { Warrior } from './../src/character.js';
import { Wizard } from './../src/character.js';
import { Thief } from './../src/character.js';
import { Priest } from './../src/character.js';

describe('Character', function() {
  let reusableCharacter;

  beforeEach(function(){
    reusableCharacter = new Character ('Jon', 'Elf');
  });

  it('should test if character constructor works', function() {
    expect(reusableCharacter.hp).toEqual(50);
  });

  it('should test if warrior inherits character', function() {
    let newWarrior = new Warrior(reusableCharacter.name, reusableCharacter.race)
    expect(newWarrior.hp).toEqual(150);
    expect(newWarrior.stamina).toEqual(100);
  });
  it ('should test if wizard inherits character', function() {
    let newWizard = new Wizard("Gandalf", "Human");
    expect(newWizard.hp).toEqual(70);
    expect(newWizard.mana).toEqual(150);
    expect(newWizard.stamina).toEqual(60);
  });
  it('should test if thief inherits character', function() {
    let newThief = new Thief("Anna", "Orc");
    expect(newThief.hp).toEqual(80);
    expect(newThief.mana).toEqual(60);
    expect(newThief.stamina).toEqual(150);
  });
  it('should test if priest inherits character', function() {
    let newPriest = new Priest("Cassie", "Ent");
    expect(newPriest.hp).toEqual(75);
    expect(newPriest.mana).toEqual(160);
    expect(newPriest.stamina).toEqual(60);
  });
  it('should test if inventory adding works', function() {
    let newWarrior = new Warrior("Jack", "Hobbit");
    newWarrior.addItem('sword');
    expect(newWarrior.inventory[0]).toEqual('sword');
  });
  it('should test if inventory dropping works', function() {
    let newWarrior = new Warrior("Rod", "Half Elf");
    newWarrior.addItem('sword');
    newWarrior.addItem('shield');
    newWarrior.addItem('armor');
    newWarrior.dropItem('shield');
    expect(newWarrior.inventory.length).toEqual(2);
  });
});
