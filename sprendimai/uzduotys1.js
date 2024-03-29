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

const book = {
  name: "Arbuzas",
  author: "Mike Pukuotukas",
  year: "1965",
};
let text1 = " ";
for (let x in book) {
  text1 += book[x] + " ";
}
console.log(text1, "--> 1.");

// 2. Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, kiekviena reikšmė turėtų vartotojo vardą ir amžių.
//    Naudodami for of ciklą, išveskite kiekvieno vartotojo vardą ir amžių.

const users = [
  { name: "Monika", age: 27 },
  { name: "Jonas", age: 20 },
  { name: "Rasa", age: 29 },
];

for (let person of users) {
  console.log(person.name + " " + person.age, "--> 2.");
}

// let textInfo = users.map(({ name, age }) => `${name} - ${age}` + "; ").join("");

// console.log(textInfo, "--> 2.");

// 3. Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija apie įvairius produktus (pavadinimas, kaina, kategorija). Parašykite funkciją,
//    kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai.

const products = [
  { name: "siurblys", price: "220", category: "buitine technika" },
  { name: "stalas", price: "85", category: "baldai" },
  { name: "kavos aparatas", price: "120", category: "butine technika" },
];

for (let item of products) {
  if (item.category === "baldai") {
    console.log(item.name, "-->  3.");
  }
}

// const filteredProducts = products.filter((p) => p.category.includes("baldai"));
// console.log(filteredProducts);

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

const user = {
  userName: "aviukas sonas",
  id: "123",
  age: "25",
  email: "aviukas@hotmail.com",
  phoneNumber: "86868686",
};
const keys = Object.keys(user);
for (let keys in user) {
  keys += [];
}
console.log(keys, "--> 5.");

const values = Object.values(user);
for (let keys in user) {
  keys += [];
}
console.log(values, "--> 5.");

// 6. Masyvo Suma: Turite masyvą, kuriame yra skaičiai. Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let arraySum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
  arraySum += arrayNumbers[i];
}

console.log(arraySum, "--> 6.");

// 7. Didžiausias Skaičius: Turite skaičių masyvą. Naudodami for ciklą, raskite didžiausią skaičių masyve.

let arrayNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let arrayMax = 0;

for (let i = 0; i < arrayNumbers1.length; i++) {
  if (arrayNumbers1[i] > arrayMax) {
  }
  arrayMax = arrayNumbers1[i];
}

console.log(arrayMax, "--> 7.");

// 8. Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant for in ciklą, grąžina objekto savybių skaičių.

const properties = {
  name: "Saule",
  age: 20,
  gender: "female",
};

let count = 0;

for (let property in properties) {
  count++;
}

console.log(count, "--> 8.");

// let count = Object.keys(properties).length;

// console.log(count, "--> 8.");

// 9. Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais, kuriuose yra vardas ir amžius. Naudodami for of ciklą, išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.

const users1 = [
  { name: "Monika", age: 15 },
  { name: "Jonas", age: 20 },
  { name: "Rasa", age: 18 },
];

for (let person of users1) {
  if (person.age >= 18) console.log(person.name, "--> 9.");
}

// const filteredUsers = users1.filter((u) => u.age >= 18);

// console.log(filteredUsers, '--> 9.');

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

console.clear();

console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");

//  1.  Masyvo Elementų Filtravimas: Sukurkite funkciją,
//  kuri naudojant for ciklą iš masyvo išrenka
//  ir grąžina naują masyvą su elementais, kurie tenkina tam tikrą sąlygą.

function arrayFilter(array, condition) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let ans = condition(array[i]);

    if (ans) {
      newArray.push(ans);
    }
  }
  return newArray;
}

const nameArray1 = ["Onyte", 5, "Monika"];

const conditionFunction = (value) => {
  console.log(value);
  return typeof value === "string" ? value : null;
};

const conditionFunctionNumber = (value) => {
  console.log(value);
  return typeof value === "number" ? value : null;
};

const filtered = arrayFilter(nameArray1, conditionFunction);
console.log(filtered);

// 2. Unikalių Reikšmių Radimas: Turite masyvą su pasikartojančiomis reikšmėmis.
// Naudodami for ciklą, sukurkite naują masyvą, kuriame būtų tik unikalios reikšmės

function duplicateInArray(array) {
  let duplicateElements = [];

  for (const num in array) {
    for (const num2 in array) {
      if (num === num2) {
        continue;
      } else {
        if (array[num] === array[num2]) {
          duplicateElements.push(array[num]);
        }
      }
    }
  }
  return [...new Set(duplicateElements)];
}
let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 1];
console.log(duplicateInArray(arr), "--> 2.");

console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");

// 3. Objekto Gylis: Parašykite funkciją, kuri naudodama for in ciklą ir rekursiją,
// grąžintų objekto gylį (kiek giliausiai objektas turi įdėtinius objektus).

const obj3 = {
  layer1: {
    plane1: {
      row1: {
        column1: 1,
        column2: 2,
        column3: 3,
      },
    },
  },
  layer2: {
    plane2: "test",
  },
  layer2: {
    plane2: "test",
  },
  layer3: {
    plane3: {
      row3: {
        column11: 1,
        column22: 2,
        column3: {
          layer232: {
            plane232: "test",
          },
        },
      },
    },
  },
};

function objDepth(obj, depth = 1) {
  let result = depth;
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      const ans = objDepth(obj[key], depth + 1);
      result = ans;
    }
  }
  return result;
}

console.log("objDepth: ", objDepth(obj3));


// 4. Masyvo Atvirkštinis: Turite skaičių masyvą. Naudodami for ciklą, 
// sukurkite naują masyvą, kurio elementai būtų pradinio masyvo, bet eilės atvirkščiai.

let array7 = [1, 12, 2, 2, 3, 3, 4, 5, 6, 7];

function reverseArray(array) {
  let newArray = [];

  for (let i = array.length - 1; i > -1; i--) {
    newArray.push(array[i]);
  }
    return newArray;
}

console.log(reverseArray(array7), '--> 4.')

// 5. Raktų Filtravimas Objekte: Turite objektą su daugybe savybių. Sukurkite funkciją, kuri naudojant for in ciklą, 
// grąžina naują objektą, kuriame yra tik tas savybės, kurios tenkina tam tikrą sąlygą.


let obj = {
  name: 'Ona',
  age: 24,
  adrres: 'Varpu g.',
  work: 'teacher',
  bank: 'sweedbank',
  car: 'Audi',
};

let condition = ['name', 'bank', 'car'];

function queryData(data, condition) {
    let returnData = {};

    for (const key in data) {
      if (condition.find((element) => element === key))
        returnData = {...returnData, [key]: data[key]}
    }
      return returnData;
}

console.log(queryData(obj, condition), '--> 5.')



// OOP UŽDUOTYS

// 1 . Knygynas:
// Sukurkite klasę, kuri reprezentuotų knygyną. Kiekviena knyga turėtų pavadinimą, autorių ir kainą.
// Galite pridėti metodus, kad būtų galima pridėti naują knygą, pašalinti knygą arba gauti visų knygų sąrašą.

const books = [
  { id: 1, title: "Raudonkepuraite", author: "Pero", price: 24 },
  { id: 2, title: "Zalciu karaliene", author: "Neris", price: 15 },
  { id: 3, title: "Pepe ilgakojine", author: "Astrida", price: 21 },
];

class Book {
  books = [];

  constructor(books) {
    this.books = books;
  }
  addBook(book) {
    this.books.push(book);
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  allBooks() {
    return this.books;
  }
}

const newBook = new Book(books);

newBook.addBook({ title: "Grybu karas", author: "Grybius", price: 10 });
console.log(newBook, "--> 1.");
console.log("--------------------------------");

newBook.removeBook(2);
console.log(newBook, "--> 1.");

console.log("--------------------------------");

console.log("-->", newBook.allBooks());
