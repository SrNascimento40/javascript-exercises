function translatePigLatin(str) {
  var translated = str.split('');
  var antiLoop = 0;
  if (translated[0] == 'a' | translated[0] == 'e' | translated[0] == 'i' | translated[0] == 'o' | translated[0] == 'u') {
    translated = translated.join('')
    translated = translated + "way"
  } else {
    while (translated[0] != 'a' & translated[0] != 'e' & translated[0] != 'i' & translated[0] != 'o' & translated[0] != 'u') {
      var shifted = translated.shift()
      translated.push(shifted)
      antiLoop++
      if (antiLoop == translated.length){
        break
      }
    }
    translated = translated.join('')
    translated = translated + "ay"
  }
  return translated;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("schwrtz"));
console.log(translatePigLatin("california"));