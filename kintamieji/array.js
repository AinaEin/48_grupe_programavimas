/*
ARRAY - arėjus, masyvas, sąrašas, listas, matrica ( - daugiskaitinis variantas laustiniai skliaustai)
*/

const luckyNumber1 = 1;
const luckyNumber2 = 2;
const luckyNumber3 = 3;

console.log(luckyNumber1);
console.log(luckyNumber2);
console.log(luckyNumber3);

const luckySum = luckyNumber1 + luckyNumber2 + luckyNumber3;
console.log(luckySum);

const luckyNumbers = [1, 2, 3];
console.log(luckyNumbers);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

const booleanlist = [true, false, true, true, false, false];
console.log(booleanlist);

const mix = [1, 'asd', true, []];

console.clear();


// Koks pazymiu vidurkis?
const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;
const mark6 = 10;

const markSum = mark1 + mark2 + mark3 + mark4 + mark5 + mark6;
console.log(markSum);
const markCount = 6;

const average = markSum / markCount;
console.log('Average:', average);

// index:       0, 1, 2, 3, 4, ..... indexas negali būti neigiamas skaičius 
const marks = [10, 2, 8, 4, 6];

let marksArraySum = 0;
console.log(marksArraySum);

marksArraySum = marksArraySum + marks[0];
marksArraySum += marks[1];
marksArraySum += marks[2];
marksArraySum += marks[3];
marksArraySum += marks[4];


console.log('Sum:', marksArraySum);


const marksArrayLength = marks.length;

const marksAverage = marksArraySum / marksArrayLength;
console.log('Array average:', marksAverage);

let index = 0;

marksArraySum += marks [index++];   // 1) marks[0]; 2) index -> 1 sum = 40 
console.log(index, marksArraySum);

marksArraySum += marks[index++];    // 1) marks[1]; 2) index -> 2 sum = 42 
console.log(index, marksArraySum);

marksArraySum += marks[index++];      // 1) marks[2]; 2) index -> 3  sum = 50 
console.log(index, marksArraySum);

marksArraySum += marks[index++];        // 1) marks[3]; 2) index -> 4 sum = 54
console.log(index, marksArraySum);

marksArraySum += marks[index++];        // 1) marks[4]; 2) index -> 5 sum = 60 
console.log(index, marksArraySum);

marksArraySum += marks[index++];         // 1) marks[5]; 2) index -> 6
console.log(index, marksArraySum);
