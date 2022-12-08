function pairElement(str) {
  var dnaArr = []
  for (let i = 0; i < str.length; i++) {
    var arr = []
    switch (str[i]) {
      case 'G':
        arr.push("G", "C")
        break;
      case 'C':
        arr.push("C", "G")
        break;
      case 'T':
        arr.push("T", "A")
        break;
      default:
        arr.push("A", "T")
        break;
    }
    dnaArr.push(arr)

  }
  return dnaArr;
}

console.log(pairElement("GCG"));