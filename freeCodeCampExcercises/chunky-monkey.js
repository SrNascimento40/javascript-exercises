function chunkArrayInGroups(arr, size) {
  let bidiArr = []
  for (let i = 0; i < arr.length; i++) {
    let newArr = []
    while (newArr.length < size) {
      if (arr[i] !== undefined) {
        newArr.push(arr[i])
        i++
      } else {break}
    }
    bidiArr.push(newArr)
    i--
  }
  return bidiArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));