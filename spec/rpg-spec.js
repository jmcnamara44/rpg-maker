import { Character } from './../src/character.js';
import { Warrior } from './../src/character.js';
import { Wizard } from './../src/character.js';
import { Thief } from './../src/character.js';
import { Priest } from './../src/character.js';
import { Item } from './../src/item.js';
import { LightArmor } from './../src/item.js';
import { Staff } from './../src/item.js';
import { levelUpBook } from './../src/item.js';
import { WizardHat } from './../src/item.js';
import { WizardRobe } from './../src/item.js';

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
  it('should test if items are picked up', function() {
    let newWarrior = new Warrior("Lea", "Khajit");
    let newLightArmor = new LightArmor();
    let newWizard = new Wizard("Leo", "Drow");
    let newStaff = new Staff();
    newWarrior.addItem(newLightArmor);
    newWizard.addItem(newStaff);
    expect(newWarrior.hp).toEqual(160);
    expect(newWizard.mana).toEqual(160);
  });
  it('should test if inventory dropping removes stats', function() {
    let newWarrior = new Warrior("Rod", "Half Elf");
    let newLightArmor = new LightArmor();
    newWarrior.addItem(newLightArmor);
    newWarrior.dropItem(newLightArmor);
    expect(newWarrior.hp).toEqual(150);
  });
  it('should test if leveling works', function() {
    let newWizard = new Wizard("Leo", "Drow");
    let newBook = new levelUpBook();
    newWizard.addItem(newBook);
    expect(newWizard.level).toEqual(2);
  });
  it('should test if inventory limits', function() {
    let newWizard = new Wizard("Leo", "Drow");
    let wizardHat = new WizardHat();
    let newBook = new levelUpBook();
    let newLightArmor = new LightArmor();
    let newStaff = new Staff();
    let wizardRobe = new WizardRobe();
    let otherStaff = new Staff();
    newWizard.addItem(wizardHat);
    newWizard.addItem(newBook);
    newWizard.addItem(newLightArmor);
    newWizard.addItem(newStaff);
    newWizard.addItem(wizardRobe);
    newWizard.addItem(otherStaff);
    console.log(newWizard.inventory);
    expect(newWizard.inventory.length).toEqual(5);
  });
});
