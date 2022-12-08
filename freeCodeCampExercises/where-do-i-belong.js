function getIndexToIns(arr, num) {

  if (arr.indexOf(num) === -1) {
    arr.push(num);
  }
  function sortNumber(a, b) {
    return a - b;
  }
  arr.sort(sortNumber);
  return arr.indexOf(num);
}


getIndexToIns([40, 60], 50);