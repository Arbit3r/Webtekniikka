// JavaScript Document
// hyvin iso meemi :))))
'use strict';

//D&D dice roller

function rollDice(){
 return Math.random();
}

function d4(){
return 1 + Math.floor(rollDice()*4);
}
function d6(){
  return 1 + Math.floor(rollDice()*6);
}
function d8(){
  return 1 + Math.floor(rollDice()*8);
}
function d10(){
  return 1 + Math.floor(rollDice()*10);
}
function d12(){
  return 1 + Math.floor(rollDice()*12);
}
function d20(){
  return 1 + Math.floor(rollDice()*20);
}
function d100(){
  return 1 + Math.floor(rollDice()*100);
}
console.log(d4());
console.log(d6());
console.log(d8());
console.log(d10());
console.log(d12());
console.log(d20());
console.log(d100());
