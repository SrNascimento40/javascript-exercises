function frankenSplice(arr1, arr2, n) {
  var arr1Copy = arr1.slice();
  arr2 = arr2.slice();

  for (var i = 0; i < arr1.length; i++) {
    arr2.splice(n + i, 0, arr1Copy[i]);
  }
  return arr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);