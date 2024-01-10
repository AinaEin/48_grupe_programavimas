// kuria nauja atsakymo masyva, kintamaji

const marks = [10, 2, 8, 4, 6];

const doubleMarks = marks.map(mark => mark * 2);

console.log(marks);
console.log(doubleMarks);

const indexList = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

const expo = indexList.map((item, index) => item ** index);
console.log(indexList);
console.log(expo);