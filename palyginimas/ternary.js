let arSilta = null;

const dabartineTemperatura = -1;
const siltaNuo = 20;

if (dabartineTemperatura >= siltaNuo) {
    arSilta = true; 
} else {
    arSilta = false;
}

console.log('ar silta:', arSilta);

let tekstas ='';

const language = 'lt';

if (language === 'lt') {
    tekstas = 'Labas';
}else{
    tekstas = 'Hello';
}

console.log('Tekstas:', tekstas);

//supaprastintas if else salyga

const riba = 3;
const dabar = 3;
const kokiaNuotaika = dabar >= riba ? 'gera' : 'bloga';
console.log('Kokia nuotaika:', kokiaNuotaika);

const skaicius = 5 > 7 ? '5 daugiau' : '5 nera daugiau';
console.log(skaicius);

const skaicius2 = 11 < 20 ? 'taip' : 'ne';
console.log(skaicius2);

let x = null;

if (5 > 3 && 7 < 9) {
    x = 'abu teisingi';
}else{
    x = 'kazkas negerai';
}
console.log(x);

const x2 = 5 > 3 && 7 < 9 ? 'abu teisingai' : 'kazkas negerai';
console.log(x2);

function pilnametis(amzius) {
    const riba = 18;

    // if (amzius >= riba) {
    // return 'As esu pilnametis';
    // }else{
    // return "As esu nepilnametis";
    // } 
    //return amzius >= riba ? 'As esu pilnametis' : 'As esu nepilnametis';
    
    const text = amzius >= riba ? '' : 'ne';
    
    return `As esu ${text}pilnametis`;
}

console.log(pilnametis(20));
console.log(pilnametis(2));

function iLoveIt(doILoveIt) {
    // if (doIloveIt) {
    //     return 'I do love it!';
    // } else {
    //     return 'I don\'t love it!';
    // }
    // return doILoveIt ? ' I do love it!' : 'I don\'t love it!';
    
    return `I do${doILoveIt ? '' : 'n\'t'} love it!`;
}

console.log(iLoveIt(true));
console.log(iLoveIt(false));

function pasisveikinimas(time) {
    //return time > 17 ? 'Labas vakaras' : 'Labas rytas';
    
    return `Labas ${time > 17 ? 'vakaras' : 'rytas'}`;
}
