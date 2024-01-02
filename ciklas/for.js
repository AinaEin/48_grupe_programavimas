/*
FOR - vienas is galimu ciklo variaciju
*/

for (let i = 0; i < 5; i++) {   // console.log yra logikos blokas
    console.log('labas', i);   // pasirasius cia 'i' galime patikrinti 'i' verte
}                              // visada reikia tikrinris per console.log vertes


for (let i = 10; i <= 33; i++) {
    console.log('kiek desimciu', i, (i - (i % 10)) / 10);
}

console.clear ();

for (let i = 0; i < 10; i +=1 ){   // i += 1 tas pats kaip i++ ir i = i + 1
    console.log("step", i);        // i += 1 didinimui daugiau nei 1 vnt, tai 2, 3 t.t.
}


const him = ['l', 'a', 'b', 'u', 'k', 'a', 's']; 
const hi = 'labukas';
console.log(hi.length);
console.log(hi[0]);
console.log(hi[1]);
console.log(hi[2]);
console.log(hi[3]);
console.log(hi[4]);
console.log(hi[5]);
console.log(hi[6]);

//              0, 1, 2, 3, 4, 5, 6, 7,....
const marks = [10, 2, 8, 4, 6, 10];
console.log('>>>>', marks.length);
console.log(marks[0]);
console.log(marks[1]);

for (let i = marks.length - 3; i < marks.length; i++) { /// isspausdina tris paskutines reiksmes
  console.log(marks, i, "->", marks[i]);
}

for (let i = 2; i < 5; i++) {               /// ispausdinti tris paskutinius
    console.log(marks, i, '->', marks[i]);
}

for (let i = 0; i < 3; i++) {      /// ispausdinti tris pirmus
  console.log(marks, i, "->", marks[i]);
}

for (let i = 0; i < marks.length; i++) {
  console.log(marks, i, "->", marks[i]);
}