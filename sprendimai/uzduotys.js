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
