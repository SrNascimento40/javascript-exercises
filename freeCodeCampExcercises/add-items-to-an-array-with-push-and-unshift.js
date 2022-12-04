function mixedNumbers(arr) {
  // Only change code below this line
arr.unshift('I', 2, 'three')
//adding to beginning
arr.push(7, 'VIII', 9)
//adding to ending
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));