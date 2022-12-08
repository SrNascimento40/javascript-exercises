function confirmEnding(str, target)  {
  var newStr = '';

  newStr = str.substring(str.length - target.length);

  return newStr === target;

}

console.log(confirmEnding("Bastian", "an"));