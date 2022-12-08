function largestOfFour(arr) {
  let toReturn = [];
  for (var i = 0; i < arr.length; i++) {

    var max = -9999;

    for (var x = 0; x < arr[i].length; x++) {
      if (arr[i][x] > max) {
        max = arr[i][x];
      }
    }
    
    toReturn.push(max);
  }

  return toReturn;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);