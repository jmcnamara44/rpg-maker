import { Character } from './../src/character.js';
import { Monster } from './../src/character.js';
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
import { Spells } from './../src/spells.js';
import { Attack } from './../src/spells.js';
import { Defend } from './../src/spells.js';
import { Magic } from './../src/spells.js';
import { Battle } from './../src/battle.js';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function(){
  let userName;
  let userRace;
  let userCharacter;
  $("#character-creation").submit(function(event){
    event.preventDefault();
    let userName = $('#name').val();
    let userRace = $('#race').val();
    if ($('#class').val() == 1) {
      userCharacter = new Warrior(userName, userRace);
      console.log(userCharacter);
    } else if ($('#class').val() == 2) {
      userCharacter = new Wizard(userName, userRace);
      console.log(userCharacter);
    } else if ($('#class').val() == 3) {
      userCharacter = new Thief(userName, userRace);
      console.log(userCharacter);
    } else if ($('#class').val() == 4) {
      userCharacter = new Priest(userName, userRace);
      console.log(userCharacter);
    }

    $("#hero_name").text(userCharacter.name);

    $("#hero_name").click(function() {
      console.log(userCharacter.name);
    })

  })
})
