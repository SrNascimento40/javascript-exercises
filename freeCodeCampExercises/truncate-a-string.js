function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  let newStr = '';
  str = str.split('');
  for (let i = 0; i<num; i++){
    newStr += str[i];
  }
  return newStr+'...'
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));