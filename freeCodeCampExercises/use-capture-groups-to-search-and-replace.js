let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = '$3 $2 $1'// Change this line
//o $3 $2 $1 se referem a ordem que será trocada
let result = str.replace(fixRegex, replaceText);
console.log(result)