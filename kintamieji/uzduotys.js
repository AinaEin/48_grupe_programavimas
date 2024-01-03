const a1 = 8;
console.log(a1);

const a2 = 7;
console.log(a2);

const a3 = 5;
console.log(a3);

const b1 = 'hello'
console.log(b1);

const b2 = 'my';
console.log(b2);

const b3 = 'world!';
console.log(b3);

const d1 = 4;
const d2 = 6;
const d3 = 3;
const d4 = 7;
const d5 = 2;

const great = 'Great number is: ' + d1 + ', ' + d2 + ', ' + d3 + ', ' + d4 + ', ' + d5 + '.';
console.log(great);

const lucky = `Lucky number is: ${d1}, ${d2}, ${d3}, ${d4}, ${d5}`;
console.log(lucky);

const happy = `Happy number is: ${8}, ${7}, ${6}, ${5}, ${4}`;
console.log(happy);

const e1 = 'Hello';
const e2 = 'my';
const e3 = 'little';
const e4 = 'pretty';
const e5 = 'bunny';

const world =
  "Words to start conversation: " +
  e1 + ' ' + e2 + ' ' + e3 + ' ' + e4 + ' ' + e5 + ' ' + ".";
console.log(world);

const planet = `It is round like apple: ${e1}, ${e2}, ${e3}, ${e4}, ${e5}`;
console.log(planet);

const space = `Wide as sea: ${'Hello'}, ${true}, ${e2.length < 1 ? 'akkjsflkjfdk.asj' : false}, ${5}, ${4}`;
console.log(space);

const one = 1; 
const two = 2;

let sum = one+two
console.log(sum);

const dSum = d1 + d2 + d3 + d4 + d5;
console.log(dSum);

const dall = d1 - d2 + d3 - d4 + d5;
console.log(dall);

const dArr = [d1, d2, d3, d4, d5];
const dArrSum = dArr.reduce((acc, cur) => acc + cur,0);
console.log(dArrSum);

const day1 = 'Hello, round orange!';
console.log(day1);

const sk1 = 36;
console.log('Pirmas skaicius:', sk1);

const sk2 = 12;
console.log('Antras skaicius:', sk2);

const sk3 = 28;
console.log('Trecias skaicius:', sk3);

const txt1 = 'Labas';
console.log('Pirmas zodis:', txt1);

const txt2 = 'mano';
console.log('Antras zodis:', txt2);

const txt3 = 'mokyniai!';
console.log('Trecias zodis:', txt3);

const happyPath = [5, 6, 7, 8, 9];
console.log(happyPath);

const luckyPath = [10, 20, 30, 40, 50];
console.log(luckyPath);

const worldPath = [1.55, 2.36, 4.55, 6.89, 8.23];
console.log(worldPath);

const flowers = ['rose', 'lily', 'daisy', 'tulip', 'sunflower'];
console.log(flowers);

const city = ['Indiana', 'Rome', 'Italy', 'Praha', 'Gdansk'];
console.log(city);

const things = ['pen', 'cheer', 'tv', 'radio', 'oven'];
console.log(things);

const wordsMergeSum = things[4] + ', ' + things[3] + ', ' + things[2] + ', ' + things[1] + ', ' + things[0];
console.log('Zodziu eiliskumas:', wordsMergeSum);

const marks = [8, 4, 8, 4, 6, 9];

let marksArraySum = 0;
console.log(marksArraySum);

marksArraySum += marks[1];
marksArraySum -= marks[2];
marksArraySum += marks[3];
marksArraySum -= marks[4];
marksArraySum += marks[5];

console.log("Sum:", marksArraySum);

console.log("----------->");

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>
// 1. Funkcija pavadinimu “tusciaFunkcija"
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>

function tusciaFunkcija() {
  return false;
}

console.log(tusciaFunkcija());

console.log("----------->");
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>
// 2. Funkcija pavadinimu “daugyba”
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>

function daugyba(numb1, numb2, numb3) {
  const multi = numb1 * numb2;
  return multi;
}

const numb1 = 8;
const numb2 = 6;
const numb3 = 4;

console.log(daugyba(numb1, numb2));
console.log(daugyba(numb3, numb2));
console.log(daugyba(numb1, numb3));


function susumuotiMasyva(masyvas) {
  const sum = masyvas[0] + masyvas[1] + masyvas[2] + masyvas[3] + masyvas[4];
  return sum;
}

const masyvas = susumuotiMasyva([10, 2, 8, 4, 6]);
console.log(masyvas);

console.clear();

console.log("----------->");

// Kintamųjų palyginimas

const a = 12;
const b = 6;

if (a > b){
  console.log('Pomidoras');
} else {
  console.log('Bandyk dar karta');
}

if (a < b) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

if (a === b) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

if (a !== b) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

if (a >= b) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

if (a <= b) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

console.clear();

const c = 'Ieva';
const d = 'Matas';

if (c > d) {
  console.log('Pomidoras');
} else {
  console.log('Bandyk dar karta');
}

if (c < d) {
  console.log('Pomidoras');
} else {
  console.log('Bandyk dar karta');
}

if (c === d) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

if (c !== d) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}
if (c >= d) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

if (c <= d) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

console.clear();

const sarsPirmas = [10, 6, 8, 4, 2];
const sarsAntras = [5, 7, 3, 9];

if (sarsPirmas.length > sarsAntras.length) {
  console.log('Pomidoras');
} else {
  console.log('Bandyk dar karta');
} 

if (sarsPirmas.length < sarsAntras.length) {
  console.log('Pomidoras');
} else {
  console.log('Bandyk dar karta');
}

if (sarsPirmas.lenght === sarsAntras.length) {
  console.log('Pomidoras');
} else {
  console.log('Bandyk dar karta');
}

if (sarsPirmas.lenght !== sarsAntras.length) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

if (sarsPirmas.lenght >= sarsAntras.length) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

if (sarsPirmas.lenght <= sarsAntras.length) {
  console.log("Pomidoras");
} else {
  console.log("Bandyk dar karta");
}

console.clear();
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>
// 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>

function skaitmenuKiekisSkaiciuje(skaicius) {
    // Patikriname, ar perduotas kintamasis yra skaičius
    if (typeof skaicius !== 'number' || isNaN(skaicius)) {
        return "Pateikta netinkamo tipo reikšmė.";
    }

    // Konvertuojame skaičių į tekstą ir skaičiuojame skaitmenų kiekį
    const skaitmenuKiekis = Math.abs(skaicius).toString().length;

    return skaitmenuKiekis;
}

console.log(skaitmenuKiekisSkaiciuje(5)); // rezultatas: 1
console.log(skaitmenuKiekisSkaiciuje(781)); // rezultatas: 3
console.log(skaitmenuKiekisSkaiciuje(37060123456)); // rezultatas: 11
console.log(skaitmenuKiekisSkaiciuje(true)); // rezultatas: 'Pateikta netinkamo tipo reikšmė.'
console.log(skaitmenuKiekisSkaiciuje("asd")); // rezultatas: 'Pateikta netinkamo tipo reikšmė.'
console.log(skaitmenuKiekisSkaiciuje(NaN)); // rezultatas: 'Pateikta netinkamo tipo reikšmė.'

console.log("----------->");

// Ciklo for panaudojimas 1. (viska ideti i funkcijas)

let sum1 = 0;

for (let i = 0; i < 0; i++) {
    sum1 += i;
}
console.log("a", sum1);

let sum2 = 0;

for (let i = 0; i < 5; i++) {
  sum2 += i;
}
console.log("b", sum2);

let sum3 = 0;

for (let i = 0; i <= 100; i++) {
  sum3 += i;
}
console.log("c", sum3);

let sum4 = 0;

for (let i = 574; i <= 815; i++) {
  sum4 += i;
}
console.log("d", sum4);

let sum5 = 0;

for (let i = -50; i < 50; i++) {
  //console.log(sum5);   
  sum5 += i;
}
console.log("e", sum5);

let sum6 = 0;

for (let i = -70; i < 30; i++) {
  //console.log(sum6);
  sum6 += i;
}
console.log('f', sum6);

function skaiciuotiSuma(pradzia, pabaiga) {
  let suma = 0;

  for (let i = pradzia; i <= pabaiga; i++) {

    suma += i;
  }  
      return suma;
}

let sum7 = skaiciuotiSuma(0, 0);
console.log('g', sum7);

let sum8 = skaiciuotiSuma(0, 4);
console.log("h", sum8);

let sum9 = skaiciuotiSuma(0, 100);
console.log("j", sum9);

let sum10 = skaiciuotiSuma(574, 815);
console.log("k", sum10);

let sum11 = skaiciuotiSuma(-50, 49);
console.log("l", sum11);

let sum12 = skaiciuotiSuma(-70, 29);
console.log("l", sum12);

console.log("----------->");

//2. for
const init = 'abcdef';
let result = '';

for (let i = init.length - 1; i >= 0; i--) {
  result = result + init[i];
}
console.log(result);

console.log("----------->");

//3. for // ideti i funkcija
let numbA3 = 0;
let numbA5 = 0;
let numbA7 = 0;

for (let i = 0; i < 12; i++) {
  if (!(i % 3)) {
    numbA3++;
  }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${numbA3} vienetai.`
);

for (let i = 0; i < 12; i++) {
  if (!(i % 5)) {
    numbA5++;
  }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ${numbA5} vienetai.`);

for (let i = 0; i < 12; i++) {
  if (!(i % 7)) {
    numbA7++;
  }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ${numbA7} vienetai.`);

console.log({numbA3, numbA5, numbA7});
//console.log(!(3 % 3));

console.log('----->');

let numbB3 = 0;
let numbB5 = 0;
let numbB7 = 0;

for (let i = 8; i < 32; i++) {
  //console.log(numbB3);
  if (!(i % 3)) {
    numbB3++;
  }
  if (!(i % 5)) {
    numbB5++;
  }
  if (!(i % 7)) {
    numbB7++;
  }
}

console.log({ numbB3, numbB5, numbB7 });

console.log("----->");

let numbC3 = 0;
let numbC5 = 0;
let numbC7 = 0;

for (let i = -18; i < 19; i++) {
  //console.log(numbB7);
  if (!(i % 3)) {
    numbC3++;
  }
  if (!(i % 5)) {
    numbC5++;
  }
  if (!(i % 7)) {
    numbC7++;
  }
}

console.log({ numbC3, numbC5, numbC7 });

console.log("----------->");

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>
// 4. Funkcija pavadinimu “didziausiasSkaiciusSarase”
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>

const numberArray1 = [1];
const numberArray2 = [1, 2, 3];
const numberArray3 = [-5, 78, 14, 0, 18];
const numberArray4 = [69, 69, 69, 69, 66];
const numberArray5 = [-1, -2, -3, -4, -5, -6, -7, -8];
const numberArray6 = ('pomidoras');
const numberArray7 = [];

function largestNumb(numArray) {
  // kad argumentas yra masyvas
  if (!Array.isArray(numArray)) {
    return 'Pateikta netinkamo tipo reikšmė.';
  }
  // kad argumentas (masyvas) nera tuscias
  if(!numArray.length) {
    return "Pateiktas sąrašas negali būti tuščias.";
  }
  // koks didziausias skaicius masyve
  let answer = null;

  for (let index = 0; index < numArray.length; index++) {
    if (answer === null) {
      answer = numArray[index];
    } else if (answer < numArray[index]) {
      answer = numArray[index];
    } 
    
  }
  return answer;
  // return Math.max(...numArray);
}

const numberLargest1 = largestNumb(numberArray1);
console.log(numberLargest1);
console.log(largestNumb(numberArray2));
console.log(largestNumb(numberArray3));
console.log(largestNumb(numberArray4));
console.log(largestNumb(numberArray5));
console.log(largestNumb(numberArray6));
console.log(largestNumb(numberArray7));

console.log('------------------------------------');

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>
// 5. Funkcija pavadinimu “isrinktiRaides”
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>

const text = 'abcdefghijkl';
const number1 = 1561;

function textLetters(text, number1) {
  // Patikriname, ar pirmasis kintamasis yra tekstas
  if (typeof text !== 'string') {
    return "Pirmasis kintamasis yra netinkamo tipo.";
  }
  // Patikriname, ar pirmasis kintamasis yra tinkamo dydžio
  if (text === '' || text.length > 100) {
    return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
  }
  // Patikriname, ar antrasis kintamasis yra skaičius
  if (typeof number1 !== 'number') {
    return "Antrasis kintamasis yra netinkamo tipo.";
  }
  // Patikriname, ar antrasis kintamasis yra didesnis už nulį
  if (number1 <= 0) {
    return "Antrasis kintamasis turi būti didesnis už nulį.";
  }
  // Patikriname, ar antrasis kintamasis yra ne didesnis už teksto ilgį
  if (number1 > text.length) {
    return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
  }
  // Išrenkame kas kelintą raidę ir sudedame į naują kintamąjį
  let rezult = '';
  for (let i = number1 - 1; i < text.length; i += number1) {
    rezult += text[i];
  }

  return rezult;
}

console.log(textLetters("abcdefg", 2)); // rezultatas: "bdf"
console.log(textLetters("abcdefghijkl", 3)); // rezultatas: "cfil"
console.log(textLetters("abc", 0)); // rezultatas: "Antrasis kintamasis turi būti didesnis už nulį."
console.log(textLetters("abc", 4)); // rezultatas: "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį."
console.log(textLetters(1561, 2)); // rezultatas: "Pirmasis kintamasis yra netinkamo tipo."

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>
// 5. Funkcija pavadinimu “dalyba”
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>>>>>>>

  function divide(first, second) {
  // Tikriname, ar abu kintamieji yra skaičiai
  if (typeof first !== 'number' || typeof second !== 'number') {
  }  //dalyba
    return first / second;
};

console.log(divide(10, 2)); // rezult: 5
console.log(divide(8, 4)); // rezult: 2
console.log(divide(15, 3)); // rezult: 5
console.log(divide(0, 7)); // rezult: 0
console.log(divide(12, 0)); // rezult: "Infinity." dalyba is nulio negalima
console.log(divide('labas', 5)); // rezult: NaN
console.log(divide(10, 'saule')); // rezult: NaN
console.log(divide("abc", "def")); // rezult: NaN