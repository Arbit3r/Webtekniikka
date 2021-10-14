// JavaScript Document


// Tulostetaan aluksi jotain
document.getElementById('output').innerHTML = '<nav id="DnD"> <!--Dnd dice roller-->' +
			'<h4>Modifier:</h4>' +
			'<label for="modifier"></label><input id="modifier" type="number" name="muunnin" value="0" placeholder="Syötä muuttuja"/>' +
			'<button id="nappi4" onClick="d4()">Heitä d4</button>' +
			'<button id="nappi6" onClick="d6()">Heitä d6</button>' +
			'<button id="nappi8" onClick="d8()">Heitä d8</button>' +
			'<button id="nappi10" onClick="d10()">Heitä d10</button>' +
			'<button id="nappi12" onClick="d12()">Heitä d12</button>' +
			'<button id="nappi20" onClick="d20()">Heitä d20</button>' +
			'<button id="nappi100" onClick="d100()">Heitä d100</button></nav>';

// Koneen valinta
function kone() {
  	let kone = document.getElementById("selected").value;
	console.log(kone);
	if (kone === "Wh40k"){Wh40k();}
	if (kone === "DnD"){DnD();}
}

// Eri Randomaus koneiden tulostus Html:ään
function DnD(){
	
	
	document.getElementById('output').innerHTML = '<nav id="DnD"> <!--Dnd dice roller-->' +
			'<h4>Modifier:</h4>' +
			'<label for="modifier"></label><input id="modifier" type="number" name="muunnin" value="0" placeholder="Syötä muuttuja"/>' +
			'<button id="nappi4" onClick="d4()">Heitä d4</button>' +
			'<button id="nappi6" onClick="d6()">Heitä d6</button>' +
			'<button id="nappi8" onClick="d8()">Heitä d8</button>' +
			'<button id="nappi10" onClick="d10()">Heitä d10</button>' +
			'<button id="nappi12" onClick="d12()">Heitä d12</button>' +
			'<button id="nappi20" onClick="d20()">Heitä d20</button>' +
			'<button id="nappi100" onClick="d100()">Heitä d100</button></nav>';
}
function Wh40k(){
	
	document.getElementById('output').innerHTML = '<nav id="Wh40k">' +
			'<h4>How many attacks?</h4>' +
			'<label for="amount"></label><input id="amount" type="number" name="dice" placeholder="Syötä heittojen määrä"/>' +
			'<h4>On what does the attack hit?</h4>' +
			'<label for="target"></label><input id="target" type="number" name="target" placeholder="Hits on what?"/>' +
			'<button id="nappi" onClick="attackRoll()">Heitä nopat</button></nav>';	
}


//D&D dice roller

const textBox = document.getElementById("modifier");

function rollDice(){
 return Math.random();
}
function d4(){
  let muuttuja = parseInt(textBox.value);
  let luku = 1 + Math.floor(rollDice()*4);
  let tulos = luku + muuttuja;
  document.getElementById('tulos').innerHTML = "D4 heiton tulos: " + tulos;
}
function d6(){
  let muuttuja = parseInt(textBox.value);
  let luku = 1 + Math.floor(rollDice()*6);
  let tulos = luku + muuttuja;
  document.getElementById('tulos').innerHTML = "D6 heiton tulos: " + tulos;

}
function d8(){
  let muuttuja = parseInt(textBox.value);
  let luku = 1 + Math.floor(rollDice()*8);
  let tulos = luku + muuttuja;
  document.getElementById('tulos').innerHTML = "D8 heiton tulos: " + tulos;
}
function d10(){
  let muuttuja = parseInt(textBox.value);
  let luku = 1 + Math.floor(rollDice()*10);
  let tulos = luku + muuttuja;
  document.getElementById('tulos').innerHTML = "D10 heiton tulos: " + tulos;
}
function d12(){
  let muuttuja = parseInt(textBox.value);
  let luku = 1 + Math.floor(rollDice()*12);
  let tulos = luku + muuttuja;
  document.getElementById('tulos').innerHTML = "D12 heiton tulos: " + tulos;
}
function d20(){
  let muuttuja = parseInt(textBox.value);
  let luku = 1 + Math.floor(rollDice()*20);
  let tulos = luku + muuttuja;
  if (luku === 1){
	document.getElementById('tulos').innerHTML = "Natural 1...";
  } else if (luku === 20){
	document.getElementById('tulos').innerHTML = "Natural 20!";
  }else {
  document.getElementById('tulos').innerHTML = "D20 heiton tulos: " + tulos;}
}
function d100(){
  let muuttuja = parseInt(textBox.value);
  let luku = 1 + Math.floor(rollDice()*100);
  let tulos = luku + muuttuja;
  document.getElementById('tulos').innerHTML = "D100 heiton tulos: " + tulos;
}


// Warhammer 40k nopat

function attackRoll(){
	const dice = document.getElementById("amount");
  	let luvut = [];
  	let times = parseInt(dice.value);

  for (let i=0; i < times; i++){
    let luku = 1 + Math.floor(rollDice()*6);
    luvut.push(luku);
    }

  const FilterNumbers = function(luvut){
    const target = document.getElementById("target");
    let toHit = parseInt(target.value);
    return luvut >= toHit;
  }
  const filtered = luvut.filter(FilterNumbers);
  document.getElementById('tulos').innerHTML ="Osumia yhteensä: "+ filtered.length;

  let count = [], tulostus = "";
  luvut.forEach(function(i) { count[i] = (count[i]||0) + 1;});
  count = Array.from(count, item => item || 0);
  for (let i = 1; i < count.length; i++){
    tulostus += i + ":" + count[i] + "<br>";
    console.log("tulostus on: ", tulostus);
  }
    document.getElementById('tulos').innerHTML ="Osumia yhteensä: "+ filtered.length + "<br>" + tulostus;
  }