function diffArray(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {

    var item = arr1[i]

    if (arr2.includes(item)) {
      arr1.splice(i, 1)
      i--
      var toDelete = arr2.indexOf(item)
      arr2.splice(toDelete, 1)
    }
  }
  newArr = [...arr1, ...arr2]
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));