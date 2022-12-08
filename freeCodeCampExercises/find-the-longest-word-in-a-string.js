function findLongestWordLength(str) {
  let words = str.split(' ');
  let bigger = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > bigger.length) {
      bigger = words[i]
    }
  }
  return bigger.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");