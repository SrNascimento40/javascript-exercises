function spinalCase(str) {
  var newStr = str.trim().split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
  return newStr;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase(spinalCase('The_Andy_Griffith_Show')));