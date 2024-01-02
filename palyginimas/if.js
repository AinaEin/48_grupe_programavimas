/* 
IF - palyginimas

LOGIKOS SABLONAI:
- if () {}
- if () {} else {}
- if () {} else if () {}
- if () {} else if () {} else {}
- if () {} else if () {} ... else if () {}
- if () {} else if () {} ... else if () {} else {}

PALYGINIMO OPERATORIAI
- visi: >, <, >=, <=, ==(ar lygu), !=(ne lygu, nelygybe), ===, !== (! - priesinga reiksme)
- naudotini: >, <, >=, <=, === (lygu), !== (nelygu) (ar reiksmes yra vienodos)
- nenaudotini: ==, != (sita naudojame, kai zinome visus kalbos tipus)
*/

if (true) {
    console.log('Tik kai TRUE');
}

console.log('----------------');

const cartValue = 1000;                 // pagrindinis scoupas
const discountTreshhold = 500;
const discountPercentage = 10;

if (cartValue > discountTreshhold) {               // naujas scoupas
    const coof = 1 - (discountPercentage / 100);
    console.log('Total to pay:', cartValue * coof);
} else {
    console.log('Total to pay:', cartValue);
}

const coof = 'coof....'; // kad ir panaudota if'e galima ta pati panaudoti globaliai
console.log(coof);


console.log("----------------");

const colors = ['red', 'green', 'blue'];
const selectedColor = 'green';

if (selectedColor == colors[0]) {
    console.log('Pasirinkta : raudona.')
} else {
    console.log('Ne raudona...');
}

if (selectedColor == colors[1]) {
  console.log("Pasirinkta : zalia.");
} else {
  console.log("Ne zalia...");
}

if (selectedColor == colors[2]) {
  console.log("Pasirinkta : melyna.");
} else {
  console.log("Ne melyna...");
}

// sutrumpintas atsakymas, butu vienas tada terminale
// if (selectedColor == colors[0]) {
//    console.log('Pasirinkta : raudona.')
//} else if (selectedColor == colors[1]) {
//  console.log("Pasirinkta : zalia.");
//} else if (selectedColor == colors[2]) {
//  console.log("Pasirinkta : melyna.");
//} else {
//  console.log('Tavo spalvos nera tarp galimu pasirinkimu:(');
//}
//

console.log("----------------");

// '' (tuscias stringas) -> false
// 'asd' (ne tuscias stringas) -> true
// 0 (nulis) -> false
// 5 (bet koks kitas skaicius) - > true

const e = false; // boolean -> number   visada reikia lyginti vienodus duomenu tipus
const f = 0;     // number -> boolen 

if (e == f) {
    console.log('TAIP');
} else {
    console.log('NE');
}

// saugesnis kodas // lygina duomenu tipus ir leidzia arba ne

const g = '10';
const h = 10;

if (g === h) {
  console.log("TAIP");
} else {
  console.log("NE");
}

console.log("end...");

console.log("----------------");

if (10 > 5 ){ 
    console.log(10);
} else {
    console.log(5);
}

const a = 10;
const b = 5;

console.log('start');

// if (10 < 5) {}
// if (true) {}

if (a == b){                // gali buti ir skaiciai po kablelio ir neigiami, Infinity
    console.log('TAIP, abi reiksmes lygios');     // visada teigiamas blokas
} else {                     // visada neigiamas blokas
    console.log('NE, abi reiksmes nera lygios');
}

console.log('end');

//const prekesKrepselioVerte = 1000;
//const nuolaidosRiba = 500;
//const nuolaidosDydisProcentai = 10;    // gali buti ir vienetais ar pinigais

//console.log('skaiciai pries skaiciavimus:...');

//if (prekesKrepselioVerte > nuolaidosRiba) {
    //console.log('bandom pritaikyti nuilaida...');
//}

//console.log('tai kokia ta galute kaina?..');

const c = 'Jonas';
const d = 'Maryte';

console.log('start');

if (c > d) {
    console.log(`TAIP, ${c} yra daugiau uz ${d}`)
} else {
    console.log(`NE, ${c} nera daugiau uz ${d}`);
}

console.log('end');

const day = 1;

if (day === 1) {
    console.log('Pirm');               
} else if (day === 2){
    console.log('Antr');               
} else if (day === 3){
    console.log('Trec');
} else if (day === 4){
    console.log('Ketv');
} else if (day === 5){
    console.log('Penk');
} else if (day === 6){
    console.log('Sest');
} else if (day === 7){
    console.log('Sekm');
} else {
    console.log('Tokios savaites dienos nera');
}

const diena = 2;     // NESTINIMAS

if (diena === 1) {
    console.log('Pirmadienis');
} else {
    if (diena === 2) {
        console.log('Antradienis');
    } else {
        if (diena === 3) {
            console.log('Treciadienis');
        } else {   
            if (diena === 4) {
                console.log('Ketvirtadienis');
            } else {   
                if (diena === 5) {
                    console.log('Penktadienis');
                } else {  
                    if (diena === 5) {
                        console.log('Sestadienis');
                    } else {  
                        if (diena === 5) {
                            console.log('Sekmadienis');
                        } else {
                            console.log('Tokios dienos savaiteje nera.');
                        }
                    }
                }
            }
        }
    }
}

console.clear();

const temperatura = 3;  // KOMBINATORIKA
const siltaNuo = 20;
const arLyja = true;

if (temperatura >= siltaNuo && arLyja) {
    console.log('Lauke silta ir lyja');
} else if (temperatura >= siltaNuo && !arLyja) {
    console.log('Lauke silta ir ne lyja');
} else if (temperatura < siltaNuo && arLyja) {
    console.log('Salta ir lyja');
} else if (temperatura < siltaNuo && arLyja) {
    console.log('Salta ir ne lyja');
} else {
    console.log('Sitos vietos kode turetu buti neiamnoma pasiekti.');
}

if (temperatura >= siltaNuo) {
    if (arLyja) {
        console.log('Lauke silta ir lyja');
    } else {
        console.log('Lauke silta ir ne lyja');
    } 
} else {
    if (arLyja) {
        console.log('Salta ir lyja');
    } else {
        console.log("Salta ir ne lyja"); 
    }
}