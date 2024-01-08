function biggest(list) {
   //console.log(list);
    if (!Array.isArray(list)) {                     // validuoji - input validation
        return 'Error: duok array tipo reiksmes';
    }
    if (list.length === 0) {
      return "Error: duok ne tuscia masyva";
    }
    let maxNumber = -Infinity;
    // logika, paskaiciuojame
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue;
        }
        if (list[i] > maxNumber) {
            maxNumber = list[i];
        }
    //answer check/validation
        if (maxNumber === -Infinity) {
            return 'Error: masyvas neturi nei vieno normalaus skaiciaus';
        }
    }
    return maxNumber; //answer return
}

console.log(biggest([]));
console.log(biggest([1]), '-->', 1);
console.log(biggest([1, 2, 3]), '-->', 3);
console.log(biggest([4, 5, 1, 7]), '-->', 7);
console.log(biggest([ -5, 78, 14, 0, 18 ]), '-->', 78);
console.log(biggest([ 69, 69, 69, 69, 66 ]), '-->', 69);
console.log(biggest([ -1, -2, -3, -4, -5, -6, -7, -8 ]), '-->', -1);
console.log(biggest( 'pomidoras'));
console.log(biggest());
console.log(biggest({}));
console.log(biggest(1526));
console.log(biggest(true));
console.log(biggest(false));
console.log(biggest(biggest));
console.log(biggest(null));
console.log(biggest(undefined));

console.log(biggest([4, 5, 1, 7, 'labas']), '-->', 7);
console.log(biggest([4, 5,'labas', 1, 7, ]), '-->', 7);
console.log(biggest(['labas', 4, 5, 1, 7]), '-->', 7);

console.log(biggest([0, 0, 0, 0, true]), "-->", 0);
console.log(biggest([0, 0, true, 0, 0]), "-->", 0);
console.log(biggest([true, 0, 0, 0, 0]), "-->", 0);

console.log(biggest([0, 0, 0, 0, Infinity]), "-->", 0);
console.log(biggest([0, 0, Infinity, 0, 0]), "-->", 0);
console.log(biggest([Infinity, 0, 0, 0, 0]), "-->", 0);

console.log(biggest([0, 0, 0, 0, NaN]), "-->", 0);
console.log(biggest([0, 0, NaN, 0, 0]), "-->", 0);
console.log(biggest([NaN, 0, 0, 0, 0]), "-->", 0);

console.log(biggest([NaN, true, 'asd', biggest, Infinity]));