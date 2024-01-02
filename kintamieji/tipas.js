/*
Viskas JS'e turi tipa. typeof operatorius, kaip pliusas sujungimui
*/



console.log(typeof 3.14);
console.log(typeof -999);
console.log(typeof 0);
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log('-----------');
console.log(typeof '');
console.log(typeof 'labas');
console.log(typeof true);
console.log(typeof false);
console.log(typeof sum);
console.log(typeof []);
console.log(typeof [1, 2]);
console.log(typeof ['a', 'b']);
console.log(typeof [true, false]);
console.log(typeof [sum, sum]);

console.log("-----------");

function sum(a, b) {
    if (typeof a !== 'number') { //if(jeigu) a nera skaicius4
        
        return 'Error: pirmas parametras nera skaiciaus tipo.'; // grazina klaida
    }
    if (typeof b !== 'number') {                            //jeigu b yra skaicius
                                                            //        grazina klaida
        return 'Error: antras parametras nera skaiciaus tipo.';                                                    
    }
  return a + b;
}

console.log(sum(7, 5), 12);
console.log(sum(7, true));
console.log(sum([], 5));
console.log(sum('labas', undefined));
