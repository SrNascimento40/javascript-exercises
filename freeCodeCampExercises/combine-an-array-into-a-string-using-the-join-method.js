function sentensify(str) {
  // Only change code below this line
  var newStr = (str.split(/\W/)).join(' ')
  return newStr
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));