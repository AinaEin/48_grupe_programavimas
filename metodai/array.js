const marks = [10, 2, 8, 4, 6];
console.log(marks[0]);        
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[777]);
console.log(marks[marks.length - 1]); 
console.log(marks[marks.length - 2]);
console.log(marks[marks.length - 3]);
console.log(marks[marks.length - 3]);
console.log(marks[marks.length - 4]);
console.log(marks[777]);

console.log('----------------------');

const a = [1, 1, 1];            //sujungia masyvus
const b = [2, 2, 2];
const c = [3, 3, 3];
const d = a.concat(b).concat(c);
const e = a.concat(b, c);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log("----------------------");

const rugsejis = [10, 2];
const spalis = [8, 4];
const lapkritis = [6];

const trimestras = rugsejis.concat(spalis, lapkritis);
console.log(trimestras);

console.log("----------------------");

console.log(marks);
console.log(marks.includes(10));
console.log(marks.includes(7));

console.log(marks.indexOf(10));
console.log(marks.indexOf(2));
console.log(marks.indexOf(8));
console.log(marks.indexOf(4));
console.log(marks.indexOf(6));

console.log(marks.indexOf(7));
console.log(marks.indexOf(77));
console.log(marks.indexOf(777));

console.log("----------------------");

console.log(marks.join());  //pavercia i stringa sujungima galime padaryti su skirtuku
console.log(marks.join(', '));
console.log(marks.join('--==-- '));

console.log("----------------------");

//const x = 102846; masyva pavertem i skaiciu
const x1 = '' + marks;
const x2 = parseInt(marks.join(''));
const x3 = marks.toString();
console.log(x1);
console.log(x2);
console.log(x3);

console.log("----------------------");

console.log(marks);
marks.reverse();       // sukeicia vietomis, apsuka viska

console.log(marks);
marks.reverse();

console.log(marks);

const alus = 'alus';  //kaip apsukti stringa, nes reverse neveikia su stringu
const sula = alus.split('').reverse().join('');
console.log(sula);

function reverseString(text) {
    return text.split('').reverse().join('');    
}

console.log(reverseString('alus'));
console.log(reverseString('sula'));
console.log(reverseString('sedekuzukedes'));
console.log(reverseString('sedek'));

console.log("----------------------");

const number = [10, 20, 30, 40, 50];
console.log(number.slice());
console.log(number.slice(2));
console.log(number.slice(1, 3));
console.log(number.slice(0, -1));
