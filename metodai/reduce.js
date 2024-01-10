const marks = [10, 2, 8, 4, 6];
// startinis numeris sudeciai pradeti - 0
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks [i];
}

console.log(sum);
// sum - kaupiklis;   mark - masyvo narys ir tada eina sudetis nuo kaires i desine
//                             10  //like kiti skaiciai 2, 8, 4, 6
const totalSum = marks.reduce((sum, mark) =>sum + mark );
console.log(totalSum);

const names = ['Jonas', 'Maryte', 'Petras', 'Ona'];

let allNames = '';

for (let i = 0; i < names.length; i++) {
    allNames += names [i][0];
}

console.log(allNames);
// jis pradeda nuo 0 nario is masyvo po to kitus prideda JonasMPO
const reducedNames = names.reduce((total, name) => total + name[0]);
console.log(reducedNames);

// 1+2+3+4
console.log([1, 2, 3, 4].reduce((t, n) => t + n));

// 1-2-3-4
console.log([1, 2, 3, 4].reduce((t, n) => t - n));

// 1*2*3*4
console.log([1, 2, 3, 4].reduce((t, n) => t * n));

// 1/2/3/4
console.log([1, 2, 3, 4].reduce((t, n) => t / n));

// 0+1+2+3+4  du parametrai(funkcija pagal kuria ka daryti ir 
// kitas kuria reiksme prasideda veiksmas)
console.log([1, 2, 3, 4].reduce((t, n) => t + n, 0));

// 0-1-2-3-4
console.log([1, 2, 3, 4].reduce((t, n) => t - n, 0));

// J. M. P. O
const inicialai = names.reduce((t, s) => t + s[0] + '.', '');
console.log(inicialai);