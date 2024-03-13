// Prisimintti funkcijų panaudojimą su mentoriumi

// 1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir grąžina pasveikinimo žinutę.

function sveikinimas(vardas) {
  console.log("labas " + vardas, "--> 1");
}
sveikinimas("Jonas");

console.log("--------------------------------");

// 2. Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.

function suma(a, b) {
  console.log(a + b);
}
suma(2, 3);

console.log("--------------------------------");

// 3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.

const array = [13, 44, 57, 79, 32];

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(sum, "--> 3");

console.log("--------------------------------");

// 4. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve.

const x = [3, 5, 11, 7, 9];

console.log(Math.max(...x));

console.log("--------------------------------");

//5. Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.

const word = "Labas rytas Lietuva";
const length = word.split(" ").join("").length;

console.log(length, "--> 5");

console.log("--------------------------------");

//6. Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.

const x1 = [2, 4, 5, 7, 3];

const x2 = x1.reduce((total, each) => total * each, 1);

console.log(x2, "--> 6");

console.log("--------------------------------");

// 7. Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.

const array1 = [65, 16, 0, 6, 64, 1, 68];
const number = 16;

const returnLarger = (arr, num) => arr.filter((n) => n > num);

console.log(returnLarger(array1, number));

console.log("--------------------------------");

// 8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.

const string = "Labas rytas Lietuva!";
function atvirksciai(str) {
  console.log(str.split("").reverse().join(""));
}
console.log(atvirksciai(string));

console.log("--------------------------------");

// 9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.

function checkPalindrom(str) {
  str = str.toLowerCase();
  return str == str.split("").reverse().join("");
}

if (checkPalindrom("Madam")) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

console.log("--------------------------------");

// 10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

console.log("--------------------------------");

// 11. Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną simbolį ir pakeitimo simbolį. Funkcija grąžina naują tekstą su pakeistais simboliais.

let originalString = "The color of the sky changes day and night.";

let newString = originalString.replace("color", "colour");

console.log(newString, "--> 11");

console.log("--------------------------------");

// 12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.

function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(convertToF(55));

console.log("--------------------------------");

// 13. 1. Parašykite funkciją, kuri priima masyvą ir grąžina naują masyvą be dublikatų.

let array2 = ["summer", "autumn", "winter", "spring", "summer", "autumn"];

function removeDuplicates(array2) {
  let one = [];
  array2.forEach((element) => {
    if (!one.includes(element)) {
      one.push(element);
    }
  });
  return one;
}
console.log(removeDuplicates(array2));

console.log("--------------------------------");

// 13. 2. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra pirminis, ir false, jei ne.

function prime(num) {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  } else {
    for (let x = 2; x < num; x++) {
      if (num % x === 0) {
        return false;
      }
      return true;
    }
  }
}
console.log(prime(5));

console.log("--------------------------------");

// 14. Parašykite funkciją, kuri priima masyvą skaičių ir grąžina jį surikiuotą mažėjančia tvarka.

const x3 = [15, 33, 22, 7, 51];
console.log(x3.sort((a, b) => b - a));

console.log("--------------------------------");

// 15. Sukurkite funkciją, kuri priima du skaičius kaip pradžios ir pabaigos intervalo ribas ir grąžina visų skaičių, esančių tame intervale, sumą.

const first = 1;
const last = 8;
function findNumbers(first, last) {
  if (typeof first !== "number" || typeof last !== "number") {
    return "Error: need to be number";
  }

  const result = [];

  for (let i = first + 1; i < last; i++) {
    result.push(i);
  }

  return result;
}
console.log(findNumbers(first, last));

console.log("--------------------------------");

// 17. Parašykite funkciją, kuri priima tekstą ir grąžina jį, pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.

function letterChanges(text) {
  return text.replace(/[a-zA-Z]/g, function (x) {
    return String.fromCharCode(x.charCodeAt(0) + 1);
  });
}

console.log(letterChanges("Hello World"));

console.log("--------------------------------");

// 18. Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmenio amžių.

function getUserAge(user) {
  const year = new Date().getFullYear();
  return year - user;
}
console.log(getUserAge(1993));

console.log("--------------------------------");

// 19. Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.

const text = "On monday will be a celebration";
const symbol = "o";

function countSameLetters(string1, character) {
  const count = string1
    .toLowerCase()
    .split("")
    .filter((x) => x === character).length;
  return count;
}

console.log(countSameLetters(text, symbol));

console.log("--------------------------------");

// 20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.

const array3 = [5, 7, 13, 21, 14];
const array4 = [6, 21, 15, 14, 8];
const array5 = array3.filter((element) => array4.lastIndexOf(element) !== -1);
console.log(array5);
const array6 = [...new Set([...array3, ...array4])];
console.log(array6, "--> 20");

console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");

// Uždavyniai su objektais

// 1. Duomenų Objektas: Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, autorių ir leidimo metus. Išveskite kiekvieną objekto savybę naudojant for in ciklą.

// 2. Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, kiekviena reikšmė turėtų vartotojo vardą ir amžių.
//    Naudodami for of ciklą, išveskite kiekvieno vartotojo vardą ir amžių.

const users = [
  { name: "Monika", age: 27 },
  { name: "Jonas", age: 20 },
  { name: "Rasa", age: 29 },
];

let textInfo = users.map(({ name, age }) => `${name} - ${age}` + "; ").join("");

console.log(textInfo, "--> 2.");

// 3. Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija apie įvairius produktus (pavadinimas, kaina, kategorija). Parašykite funkciją,
//    kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai.

// 4 . Objekto Kopijavimas: Parašykite funkciją, kuri naudojant for in ciklą sukurtų objekto kopiją.

const obj1 = {
  type: "car",
  model: "audi",
  year: 2016,
};

const obj2 = {};
for (let key in obj1) {
  obj2[key] = obj1[key];
}
console.log(obj2, "--> 4.");

// const copy = Object.assign({}, obj1);
// console.log(copy, "--> 3");

// 5. Raktų ir Reikšmių Atrinkimas: Turite vartotojo objektą su įvairiomis savybėmis. Naudodami for in ciklą, sukurti du masyvus: viename saugokite objekto raktus, o kitame - reikšmes.

// 6. Masyvo Suma: Turite masyvą, kuriame yra skaičiai. Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let arraySum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
  arraySum += arrayNumbers[i];
}

console.log(arraySum, "--> 6.");

// 7. Didžiausias Skaičius: Turite skaičių masyvą. Naudodami for ciklą, raskite didžiausią skaičių masyve.

// 8. Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant for in ciklą, grąžina objekto savybių skaičių.

const properties = {
  name: "Saule",
  age: 20,
  gender: "female",
};

let count = 0;

for (let property in properties) {
  count++;
};

console.log(count, '--> 8.');

// let count = Object.keys(properties).length;

// console.log(count, "--> 8.");


// 9. Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais, kuriuose yra vardas ir amžius. Naudodami for of ciklą, išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.

// 10. Objekto Savybių Keitimas: Turite objektą, kuriame saugomi įvairių žmonių amžiai. Naudodami for in ciklą, padidinkite kiekvieno asmens amžių 1 metais.

let personsAge = {
  age1: 13,
  age2: 15,
  age3: 17,
};

let newAge = {};

for (let age in personsAge) {
  console.log(personsAge[age] + 1, "--> 10.");
}
