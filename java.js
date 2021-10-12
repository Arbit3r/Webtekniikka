// JavaScript Document
// hyvin iso meemi :))))
'use strict';

//D&D dice roller
const nappid4 = document.getElementById("nappi4");
const nappid6 = document.getElementById("nappi6");
const nappid8 = document.getElementById("nappi8");
const nappid10 = document.getElementById("nappi10");
const nappid12 = document.getElementById("nappi12");
const nappid20 = document.getElementById("nappi20");
const nappid100 = document.getElementById("nappi100");
const textBox = document.getElementById("modifier");

nappid4.addEventListener("click", d4);
nappid6.addEventListener("click", d6);
nappid8.addEventListener("click", d8);
nappid10.addEventListener("click", d10);
nappid12.addEventListener("click", d12);
nappid20.addEventListener("click", d20);
nappid100.addEventListener("click", d100);
function rollDice(){
 return Math.random();
}
function testing(){
  console.log("Toimii!");
}
function d4(){
  let muuttuja = parseInt(textBox.value);
  let luku = 1 + Math.floor(rollDice()*4);
  let tulos = luku + muuttuja;
  console.log("d4 tulos: ",tulos);

  return tulos;
}
function d6(){
  let muuttuja = parseInt(textBox.value);
  let luku = +muuttuja + 1 + Math.floor(rollDice()*6);
  let tulos = luku + muuttuja;
  console.log("d6 tulos: ", tulos)
  return tulos;

}
function d8(){
  let muuttuja = parseInt(textBox.value);
  let luku = muuttuja + 1 + Math.floor(rollDice()*8);
  let tulos = luku + muuttuja;
  console.log("d8 tulos: ", tulos);
  return tulos;
}
function d10(){
  let muuttuja = parseInt(textBox.value);
  let luku = muuttuja + 1 + Math.floor(rollDice()*10);
  let tulos = luku + muuttuja;
  console.log("d10 tulos: ", tulos);
  return tulos;
}
function d12(){
  let muuttuja = parseInt(textBox.value);
  let luku = muuttuja + 1 + Math.floor(rollDice()*12);
  let tulos = luku + muuttuja;
  console.log("d12 tulos: ", tulos);
  return tulos;
}
function d20(){
  let muuttuja = parseInt(textBox.value);
  let luku = muuttuja + 1 + Math.floor(rollDice()*20);
  let tulos = luku + muuttuja;
  if (luku == 1){
    console.log("Natural 1...");
  } else if (luku == 20){
    console.log("Natural 20!");
  }else {
  console.log("d20 tulos: ", tulos);}
  return tulos;
}
function d100(){
  let muuttuja = parseInt(textBox.value);
  let luku = muuttuja + 1 + Math.floor(rollDice()*100);
  let tulos = luku + muuttuja;
  console.log("d100 tulos: ", tulos);
  return tulos;
}
d4();
d6();
d8();
d10();
d12();
d20();
d100();