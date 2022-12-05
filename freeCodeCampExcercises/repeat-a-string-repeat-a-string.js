function repeatStringNumTimes(str, num) {
  let newStr = ''
  for (let i = num; i>0; i--){
    newStr += str
  }
  return newStr
}

console.log(repeatStringNumTimes("abc", 3));