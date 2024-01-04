/* HOF - HIGHER ORDER FUNCTION */
/* tevine funkcija, kuri gauna kita funkcija, kaip argumenta */


// [20, 4, 16, 8, 12] *2  veiksmas vyksta per visus esancius masyve elementus
// [11, 3, 9, 5, 7] +1

function doubleTrouble(n) {
    if (n * 2 > 10) {
        return 10;              // isorine funkcija
    }
    
    return n * 2;
}

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const doubleMarks = [];

for (let i = 0; i < marks.length; i++) {
    //doubleMarks.push(marks[i] * 2);
    //const mark = marks[i];
   // const doubleMark = mark *2;
    //doubleMark.push(doubleMark);
    doubleMarks.push(doubleTrouble(marks[i]));
}
console.log(doubleMarks);

console.log('----------------------');

const doubleMarksMap = marks.map(doubleTrouble);  // nurodom prie map i kuria funkcija eiti
console.log(doubleMarksMap);

const tripleMarks = marks.map(n => n * 3); 
console.log(tripleMarks);

const bool = [true, false, true, false, true, false, true, false];
const allTrue = bool.map(x => true);
console.log(allTrue);

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
const inicialai = students.map(s => s[0]);
console.log(inicialai);

console.log("----------------------");

const matrix = [
    [1, 2],
    [3],
    [4, 5, 6],
    [7, 8, 9, 10, 11],
    [0],
];
const matrixCount = matrix.map(m => m.length);
const matrixFirstValue = matrix.map(m => m[0]);
console.log(matrixCount);
console.log(matrixFirstValue);

console.log("----------------------");

const mandarinai = [
    [true, false],
    [true],
    [true, true, true],
    [false, false, false, false, false],
    [true, true, true, false],
];
// [ 1, 1, 3, 0, 3]

function prinokusiuMandarinuKiekis(krepselis) {
    let geruKiekis = 0;

    for (let i = 0; i < krepselis.length; i++) {
        const mandarinas = krepselis[i];
        if(mandarinas === true) {
            geruKiekis++;
        }
    }
    return geruKiekis;
}

const prinokusiuKiekis = mandarinai.map(prinokusiuMandarinuKiekis);
console.log(prinokusiuKiekis);

console.log("----------------------");

function filterAllowedPeople(weight) {
    const weightLimit = 80;
    if (weight > 80) {              //niekur nenurodytas sk. 80, del to
        return false;               // pasiraseme i const
    }
    return true;
}

const weights = [100, 10, 50, 70, 66, 99, 150, 20];
const allowedWeights = [];

for (let i = 0; i < weights.length; i++) {
    if (filterAllowedPeople(weights[i])) {
        allowedWeights.push(weights[i]);
    }
}

console.log(allowedWeights); 

const allowedWeightsFilter = weights.filter(filterAllowedPeople);
console.log(allowedWeightsFilter);

const allowedWeights2 = weights.filter(w => w > 80);
console.log(allowedWeights2);

const allowedWeights3 = weights.filter(w => w <= 80);
console.log(allowedWeights3);

const allowedWeights4 = weights.filter(w => w <= 80 && w > 30);
console.log(allowedWeights4);

console.log("----------------------");

const mandarinai2 = [
    [true, false],
    [true],
    [true, true, true],
    [false, false, false, false, false],
    [true, true, true, false],
];
// [ 1, 1, 3, 0, 3]

//[[true], 
//[true], 
//[true, true, true], 
//[], 
//[true, true, true]];

const mandarinaiFilter = mandarinai2.
    map(krepselis => krepselis.filter(mandarinas => mandarinas === true).length);
console.log(mandarinaiFilter);
