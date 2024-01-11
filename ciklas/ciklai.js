for (let i = 0; i < 5; i++) {
    console.log(i);
}

const studentNames = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i = 0; i < studentNames.length; i++) {
    const studentName = studentNames[i];
    console.log(studentName);
}

console.log('------------------');

function arTestiCikla(iteracijosNr, sarasoIlgis) {
    return iteracijosNr < sarasoIlgis;
}

// inicijuoti kintamuosius
let j = 0;
for (; j < studentNames.length; j++) {
    const studentName = studentNames[j];
    console.log(studentName);
}

console.log("FOR:------------------");

const colorsList = ['red', 'green', 'blue', 'black', 'white', 'yellow'];

for (let i = 0; i < colorsList.length; i++) {
    const color = colorsList[i];
    console.log(i, color);
}

console.log("FOR OF:------------------");
// nesimato indexo, eina automatiskai
let i2 = 0;
for (const color of colorsList) {
    console.log(i2++, color);
}

console.log("WHILE:------------------");

//begalinis ciklas su WHILE, turi tenkinti salyga, kad pradetu veikti
let i3 = 0;
while (i3 < colorsList.length) {
    const color = colorsList[i3];
    console.log((i3, color));
    i3++;
}

console.log("DO WHILE:------------------");
// pirma padaro, po to paklausia ar reikia pakartoti
let i4 = 0;
do {
    const color = colorsList[i4]
    console.log(i4, color);
    i4++;
} while (i4 < colorsList.length)


console.log("FOR-EACH:------------------");
//iteruoja automatiskai per masyva
const colorForEach = colorsList.forEach((color, i5, originalArray) => {
    console.log(color, i5, originalArray);
});

console.log(colorForEach);

console.log("FOR-IN:------------------");
// nedirba su arejais
const car = {
    brand: 'Audi',
    model: '80',
    color: 'red',
    price: 300,
};

const carObjKeys = Object.keys(car);
console.log(carObjKeys);

for (const key of carObjKeys) {
    console.log('----', key, car[key]);
}

console.log("------------------");

for (const key in car) {
    console.log(car[key]);  //standartine sintakse[] virsutiniu 2 operaciju supaprastinimas
}