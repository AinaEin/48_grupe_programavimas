/* 
OBJECT - objektas
*/

const name1 = 'Jonas';
const name2 = 'Maryte';
const name3 = 'Petras';
const name4 = 'Ona';

const marks1 = [];
const marks2 = [10];
const marks3 = [2, 4, 6];
const marks4 = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];

const phone1 = '861234589';
const phone2 = '861234654';
const phone3 = '861234147';

        // [name, marks, phone]
const student1 = [name1, marks1, phone1];
const student2 = [name2, marks2, null];
const student3 = [name3, marks3, phone2];
const student4 = [name4, marks4, phone3];

const students = [student1, student2, student3, student4];

// koks yra trecio studento telefono numeris?
console.log(students[2][2]);

const emptyObject = {};
console.log(emptyObject);

const s1 = {
  //key name (vientisas tekstas) - value
  name: "Jonas",
  marks: [],
  phone: "861234589",
};


const s2 = {
  name: "Maryte",
  marks: [10],
  phone: "861234654",
};
console.log(s2);

const s3 = {
  name: "Petras",
  marks: [2, 4, 6],
  phone: "861234147",
};
console.log(s3);

console.log(s3['name']);
console.log(s3['marks']);
console.log(s3['marks'][0]);
console.log(s3['marks'][1]);
console.log(s3['marks'][2]);
console.log(s3['marks'].length);
console.log(s3['phone']);
console.log(s3['phone'].slice(-3));

console.log(s1);

console.log(s1['name']);
console.log(s1["marks"], s1["phone"]);

const pazymiaiArray = [10, 2, 8, 4, 6];
const pazymiaiObject = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
}

console.log(pazymiaiArray[2]);
console.log(pazymiaiObject[2]);

console.log("------------------------");

/*
Vasara:
- menesiu pavadinimai
- kiekvienas menesis turi skirtinga dienu kieki
- svenciu sarasas
- kasdienes temperaturos
*/

const summer = {
    title: {
        lt: 'Vasara',
        en: 'Summer',
    },
    months: ['Birzelis', 'Liepa', 'Rugpjutis'],
    days: [30, 31, 31],
    holidays: [
        {
            name: 'Jonines',
            date: {
                year: 2024,
                month: 6,
                day: 23,
            }
        },
        {
            name: 'Mindaugo karunavimas',
            date: {
                year: 2024,
                month: 7,
                day: 6,
            }
        }
    ]
}

console.log("------------------------");

// standartine sintakse istraukti informacija is []
console.log(summer['title']);
console.log(summer['title']['lt']);
console.log(summer['title']['en']);
console.log(summer['months']);
console.log(summer['months'][0]);
console.log(summer['months'][1]);
console.log(summer['months'][2]);

console.log('------------------------');

// supaprastinta objekto sintakse - patogesnis skaitymas
console.log(summer.title);
console.log(summer.title.lt);
console.log(summer.title.en);
console.log(summer.months[0]);
console.log(summer.months[1]);
console.log(summer.months[2]);