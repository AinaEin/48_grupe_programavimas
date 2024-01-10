// generuoja originalu masyva, kintamuosius (homogeniski - vienodi duomenu tipai)
// rikiuoja nuo maziausio iki didziausio, 10 skaiciu ima kaip pirma del 1
// jis viduje keicia viska i stringus ir tada rikiuoja masyve
// 'labas' - 21 = NaN Error
// 21 - 'labas' = NaN Error
// pagal ASCII abecele rikiuojami simboliai, raides, skaiciai
const marks = [10, 2, 21, 8, 33, 121, 13, 4, 75, 6, 10000];

//          5  7      -2   [2, 4, 6, 8, 10, 13, 21, 33, 75, 121, 10000]
marks.sort((a, b) => a - b);
console.log(marks);
//            5  7      2    [10000, 121, 75, 33, 21, 13, 10, 8,  6, 4, 2]
marks.sort((a, b) => b - a);  
console.log(marks);

const students = [
    { 
        name: 'Jonas',
        age: 99,
    },
    { 
        name: 'Maryte',
        age: 88,
    },
    { 
        name: 'Petras',
        age: 33,
    },
    { 
        name: 'Ona',
        age: 44,
    }

];

console.log(students[0]);
console.log(students[1]);
// issortino pagal amziu nuo 33 - 99
students.sort((a, b) => a.age - b.age);
console.log(students);
// issortino pagal amziu nuo 99 - 33
students.sort((a, b) => b.age - a.age);
console.log(students);

const list = [
  [5],
  ["a", "s"],
  [[], 5, "s", false, undefined],
  [true],
  [],
  [[], 5, "s", false],
]; 
console.log(list);

list.sort((a, b) => a.length - b.length);
console.log(list);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
names.sort();
console.log(names);

// %, 152, ?, A, [, a, aa, c, ca, cb, f, sss
const abc = ['a', 'aa', 'f', 'sss', 'c', 'cb', 'ca', 'A', 152, '?', '%', '['];

abc.sort();
console.log(abc);