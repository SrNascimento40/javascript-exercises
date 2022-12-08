function sumAll(arr) {
  const smallNum = arr[0] > arr[1] ? arr[1]: arr[0];
  const biggerNum = smallNum === arr[0] ? arr[1] : arr[0]
  var toSum = 0;

  for(let i=(smallNum+1); i<biggerNum; i++){
    toSum += i;
  }
  return arr[0]+arr[1]+toSum;
}

console.log(sumAll([1, 4]));