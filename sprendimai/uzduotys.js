// 1 uzduotis - mentoriaus

const vardas = "Arnold";
const pavarde = "Schwarzenegger";

if (vardas.length < pavarde.length) {
  console.log(vardas);
} else {
  console.log(pavarde);
}

console.log("----------->");

// 2 uzduotis - mentoriaus

const vardass = "Aina";
const pavardee = "Einikyte";
const gimimoMetai = 1990;
const dabartiniaiMetai = 2023;

const amzius = dabartiniaiMetai - gimimoMetai;
console.log(`Aš esu ${vardass} ${pavardee}. Man yra ${amzius} metai.`);

console.log("----------->");

// 3 uzduotis - mentoriaus

const vardas1 = "Johnny";
const pavarde1 = "Depp";

// Šis kodas naudoja slice metodą,
// kuris leidžia pasirinkti tam tikrą dalį iš stringo,
// -3, kad gautume tris paskutines raidės iš kiekvieno stringo
const treciasKintamasis = vardas1.slice(-3) + pavarde1.slice(-3);

console.log(treciasKintamasis);

console.log("----------->");

// 4 uzduotis - mentorius

const sakinys = "Once upon a time in hollywood";

const pakeistasSakinys = sakinys.replace(/o/gi, "*");
console.log(pakeistasSakinys);

console.log("-------------");

// 5 uzduotis - mentorius

const kintamasis1 = Math.floor(Math.random() * 3);
const kintamasis2 = Math.floor(Math.random() * 3);
const kintamasis3 = Math.floor(Math.random() * 3);
const kintamasis4 = Math.floor(Math.random() * 3);

const kintamieji = [kintamasis1, kintamasis2, kintamasis3, kintamasis4];

const kiekisNuliu = kintamieji.filter((x) => x === 0);
const kiekisVienetu = kintamieji.filter((x) => x === 1);
const kiekisDvejetu = kintamieji.filter((x) => x === 2);

console.log("Sugeneruoti kintamieji", kintamieji);
console.log("Nuliu kiekis", kiekisNuliu);
console.log("Vienetu kiekis", kiekisVienetu);
console.log("Dvejetu kiekis", kiekisDvejetu);

console.log("-------------");

// 6 uzduotis - mentorius

function calculateResult() {
  // sugalvoti du kintamuosius tarp 0 and 4
  const randomNumber1 = Math.floor(Math.random() * 5);
  const randomNumber2 = Math.floor(Math.random() * 5);

  // Didziausios ir maziausios vertes
  const largerNumber = Math.max(randomNumber1, randomNumber2);
  const smallerNumber = Math.min(randomNumber1, randomNumber2);

  // Dalyba rezultatui gauti
  const result = largerNumber / smallerNumber;

  // Rezultatas du skaiciai po kablelio
  console.log(result.toFixed(2));
}

// Call the function to calculate and print the result
calculateResult();

console.log("-------------");

// 7. uzduotis - mentorius

function calculateResult1() {
  // sugalvoti tris kintamuosius tarp 0 and 25
  const randomNumber3 = Math.floor(Math.random() * 26);
  const randomNumber4 = Math.floor(Math.random() * 26);
  const randomNumber5 = Math.floor(Math.random() * 26);
  // sudelioti skaiciu eiliskuma ir surasti jo vidurine reiksme su indeksu
  const numbers = [randomNumber3, randomNumber4, randomNumber5];
  numbers.sort((a,b) => a - b);
  const middleValue = numbers[1];
  //pamatyti 3 parinktus kintamuosius ir vid reiksme
  console.log('allNumbers:', randomNumber3, randomNumber4, randomNumber5);
  console.log('middle value:', middleValue);

}
calculateResult1();

console.log("-------------");

// 8. uzduotis - mentorius

const name = 'Kyeno';
const lastName = 'Reavse';

const answer = `${name[0]}.${lastName[0]}.`;
console.log(answer);

console.log("-------------");

// 9. uzduotis - mentorius

function sugeneruotasBetkoksStringas() {
  const raides = 'abcdefghijklmnoprstuvz';
  let betkoksStringas = '';

  for (let i = 0; i < 3; i++) {
    const betkoksIndexas = Math.floor(Math.random() * raides.length);
    betkoksStringas += raides.charAt(betkoksIndexas);
  }

  return betkoksStringas;
}

// Iskviecia funkcija sugeneruoti bet koki stringa
const randomString = sugeneruotasBetkoksStringas();

// parodo koks stringas gavosi
console.log(randomString);

console.log("-------------");

// 1.1 uzduotis - mentoriaus

function pasisveikinimas(name) {
  console.log("Labas" + ", " + name);
}

pasisveikinimas('Elena.');

console.log("----------->");

// 2.2 uzduotis - mentoriaus

function skaiciuotiSimbolius(tekstas) {
  return tekstas.length;
}

let ivestasTekstas = "Labas, pasauli!";

// Iškviečiame funkciją ir gautą rezultatą naudojame kitur
let rezultatas = skaiciuotiSimbolius(ivestasTekstas);

// Atvaizduojame rezultatą konsolėje
console.log("Teksto simbolių skaičius: " + rezultatas);

console.log("----------->");

// 2.3 uzduotis - mentoriaus

const name1 = 'Albert';
const lastName1 = 'Einshtein';

function inicialai(name1, lastName1) {
    const pirmasInicialas = name1.charAt(0).toUpperCase();
    const antrasInicialas = lastName.charAt(0).toUpperCase();
  return pirmasInicialas + '.' + antrasInicialas + '.';
}
const result = inicialai ('Albert', 'Einshtein');
console.log(result);

console.log("----------->");

// 2.4 uzduotis - mentoriaus

function calculateResult2() {
  // sugalvoti tris kintamuosius tarp 0 and 5
  const randomNumber3 = Math.floor(Math.random() * 6);
  const randomNumber4 = Math.floor(Math.random() * 6);
  const randomNumber5 = Math.floor(Math.random() * 6);
  
  // sugrazina kaip stringa ir padeda kablelius po kiekvieno skaiciaus
  return `${randomNumber3}, ${randomNumber4}, ${randomNumber5}`;
}
// isspausdinamas rezultatas
const result1 = calculateResult2();
console.log(result1);

console.log("----------->");

// 2.5 uzduotis - mentoriaus

function randomArray (from, to, limit) {
  // patikrinti ar jie yra skaiciai
  if (typeof from !== 'number', to !== 'number', limit !== 'number') {
    
  }
    //padaryti tuscia afreju i kuri eis bet kokie skaiciai is po push
   const resultArray = [];

  for (let i = 0; i < limit; i++) {
    //sugeneruojam bet kokius skaicius tarpe 'from' ir 'to
    const randomValue = Math.floor(Math.random() * (to - from + 1)) + from;
    resultArray.push(randomValue);
  }

  return resultArray;
}
  const result2 = randomArray(30, 50, 5);
  console.log(result2);

  console.log("----------->");

  // 2.6 uzduotis - mentoriaus

  const cube = (num, pwr) => num ** pwr;

  console.log(cube(6, 3));

  // 2.7 uzduotis - mentoriaus

  // 2.8 uzduotis - mentoriaus

  // 2.9 uzduotis - mentoriaus


  // 2.10 uzduotis - mentoriaus

  function sugeneruotasArray(length, min, max) {
    const resultArray = [];

    for (let i = 0; i < length; i++) {
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      resultArray.push(randomValue);
    }

    return resultArray;
  }

  // Sugeneruoti 100 elementų masyvą su skaičiais nuo 997 iki 15991
  const naujasArray = sugeneruotasArray(100, 997, 15991);

  // Spausdinti sugeneruotą masyvą į konsolę
  console.log(naujasArray);

  const str = "The greatest victory is that which requires no battle";

console.clear();


function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c < 0) {
    return c + " is freezing temperature";
  } else {
    return c + " is above freezing temperature";
  }
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) + 5 / 9;
  return celsius;
}

console.log(weatherInfo(50));


function rainAmount(mm){
    if (mm > 40) {
         return `You need to give your plant ${mm - 40} mm of water`;
      } else {
         return "Your plant has had more than enough water for today!";
    }
}

console.log(rainAmount(100));


function myFirstKata(a, b) {
  if (typeof a !== "number" || b  !== "number") {
    return false;
    } else {
      return a % b + b % a;  
 }
}

const solve = (x, y) => x / y;

console.log(solve(2, 1));

const name5 = "Abe";
function greet_abe(name5) {
  return "Hello, " + name5 + "!";
};
console.log(greet_abe(name5));

const name6 = "Ben";
function greet_ben(name6) {
  return "Hello, " + name6 + "!";
};
console.log(greet_ben(name6));