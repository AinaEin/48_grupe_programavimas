function numberSize(number) {
    if (typeof number !== 'number') {
        return 'Error: duok skaiciaus tipo reiksme';
    }
    if (!isFinite(number)) {
        return 'Error: duok normalu skaiciu, kuris turi skaitmenis';
    }

    const numberAsString = '' + number;
    
    let size = numberAsString.length;

    for (let i = 0; i < numberAsString.length; i++) {
        if (numberAsString[i] === '.') {
            size--;
        }
        if (numberAsString[i] === '-') {
            size--;
        }
    }
    return size;
}

console.log(numberSize(3), '-->', 1);
console.log(numberSize(314), '-->', 3);
console.log(numberSize(3.14), '-->', 3);
console.log(numberSize(865452314), '-->', 9);

console.log(numberSize(-3), "-->", 1);
console.log(numberSize(-314), "-->", 3);
console.log(numberSize(-3.14), "-->", 3);
console.log(numberSize(-865452314), "-->", 9);

console.log(numberSize('labas'), "-->",);
console.log(numberSize(true), "-->",);
console.log(numberSize(false), "-->",);
console.log(numberSize(NaN), "-->",);
console.log(numberSize([]), "-->",);
console.log(numberSize([1, 2, 3]), "-->",);
console.log(numberSize(Infinity), "-->",);
console.log(numberSize(-Infinity), "-->",);