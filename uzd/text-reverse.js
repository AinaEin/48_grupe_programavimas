function reverse(text) {
  let ats = "";

  for (let i = 0; i < text.length; i++) {
    const x = text.length - 1 - i;
    ats += text[x];
  }

  return ats;
}
console.log(reverse('abc'), '-->', 'cba');
console.log(reverse('labas'), '-->', 'sabal');

//for (let i = 0; i < text.length; i++) {
 //   ats = text[i] + ats;
  //  return ats;
//}
//console.log(reverse("sedek"), "-->", "kedes");

//for (let i = text.length - 1; i >= 0; i--) {
 // ats += text[i];
  //return ats;
//}
//console.log(reverse("sedek"), "-->", "kedes");