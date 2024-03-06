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
    const antrasInicialas = lastName1.charAt(0).toUpperCase();
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

console.log('--------------------------------');


function problem(x) {
  if (x === 'string') {
    return 'Error';
}
  if (x === 'number') {
    return number * 50 + 6;
  } else {
    return 'Error';
  };
}

console.log("--------------------------------");


const items = [];
items.push({ a: "b", c: "d" });
console.log(items);


function helloWorld() {
  const str = "Hello World!";
  console.log(str);
}
helloWorld();

var a = "code";
var b = "wa.rs";
const name9 = (a, b) => {
  return a + b;
};

console.log(name9(a, b))

function hero(bullets, dragons) {
  if (bullets > dragons * 2) {
    return true;
  } else {
    return false;
  } 
}


function mystery(results) {
  var results = { sanity: "Hello" };
  return results;
}
console.log(mystery());


const str6 = "today";

const arr = str6.split(" ");

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
const str7 = arr.join(" ");
console.log(str7);

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft) >= distanceToPump; 
};  

function peopleWithAgeDrink(old) {
  if (old <= 13) {
    return "drink toddy";
  } else {
    if (old <= 17) {
      return "drink coke";
    } else {
     if (old <= 20) {
        return "drink beer";
        } else {
          if (old <= 30) {
            return "drink whisky";
        }
      }
    }
  }
};  

// Prisimintti funkcijų panaudojimą su mentoriumi

// 1. Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir grąžina pasveikinimo žinutę.

function sveikinimas(vardas){
    console.log('labas ' + vardas);
}
sveikinimas ('Jonas');

// 2. Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.

function suma (a, b) {
  console.log(a + b);
}
suma (2, 3);

// 3. Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.

const array = [13, 44, 57, 79, 32];

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        
        sum += array[i];
}

console.log(sum);

// 4. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve.

const x = [3, 5, 11, 7, 9];

console.log(Math.max(...x));

//5. Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.

const word = "Labas rytas Lietuva";
const length = word.split(" ").join("").length;

console.log(length);

//6. Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.

const x1 = [2, 4, 5, 7, 3];
const x2 = x1.reduce((total, each) => total * each, 1);
console.log(x2);


// 7. Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus, o grąžina naują masyvą, kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.

const array1 = [65, 16, 0, 6, 64, 1, 68];
const number = 16;

const returnLarger = (arr, num) => arr.filter((n) => n > num);

console.log(returnLarger(array1, number));


// 8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.

const string = "Labas rytas Lietuva!";
function atvirksciai(str) {
  console.log(str.split("").reverse().join(""));
}
console.log(atvirksciai(string));


// 9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.

function checkPalindrom(str) {
  str = str.toLowerCase();
  return str == str.split("").reverse().join("");
}

if (checkPalindrom('Madam')) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
};

// 10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra lyginis, ir false, jei skaičius yra nelyginis.

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};


// 11. Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną simbolį ir pakeitimo simbolį. Funkcija grąžina naują tekstą su pakeistais simboliais.

let originalString = "The color of the sky changes day and night.";

let newString = originalString.replace("color", "colour");

console.log(newString);

// 12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.


function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(convertToF(55));


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


// 14. Parašykite funkciją, kuri priima masyvą skaičių ir grąžina jį surikiuotą mažėjančia tvarka.

x3 = [15, 33, 22, 7, 51];
console.log(x3.sort((a, b) => b - a));


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


// 17. Parašykite funkciją, kuri priima tekstą ir grąžina jį, pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.

function letterChanges(text) {
  return text.replace(/[a-zA-Z]/g, function(x) {
    return String.fromCharCode(x.charCodeAt(0)+1);
  })
}

console.log(letterChanges("Hello World"));

// 18. Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmenio amžių.

function getUserAge(user) {
  const year = new Date().getFullYear();
  return year - user;
}
console.log(getUserAge(1993));


// 19. Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.

const text = "On monday will be a celebration";
const symbol = "o";

function countSameLetters(string1, character) {
  const count = string1.toLowerCase().split("").filter((x) => x === character).length;
  return count;
}

console.log(countSameLetters(text, symbol));

// 20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą, kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.

const array3 = [5, 7, 13, 21, 14];
const array4 = [6, 21, 15, 14, 8];
const array5 = array3.filter(element => array4.lastIndexOf(element) !== -1);
console.log(array5);
const array6 = [...new Set([...array3, ...array4])];
console.log(array6, '--> sitas');