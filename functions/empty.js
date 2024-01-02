/* 
FUNCTION - funkcija 
perpanaudojamas logikos blokas

pavadinima reikia suteikti ka funkcija zada daryti
*/

function empty() {
    // funkcijos logikos blokas,  // visos funkcijos turi gale return
    return 5;
}

const ats1 = empty();           // toks pat 5 pas visus, o ne tas pats
console.log(ats1);

const ats2 = empty();
console.log(ats2);

const ats3 = empty();
console.log(ats3);

console.log(empty());

function kazkasNaujo() {
    777;
    return undefined; // sita parasys kompas nes virsuje nera return
}

console.log(kazkasNaujo());

function pomidoras () {
    console.log('Va, suveike pomidoras...');
    return 123;  // kol kas tai kaip beprasme reiksme
}


pomidoras();   // nes nieko su ja nedarome
pomidoras();
pomidoras();
pomidoras();
pomidoras();
pomidoras();

