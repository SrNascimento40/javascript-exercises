function popShift(arr) {
  let popped = arr.pop(); // Change this line for removing in the end
  let shifted = arr.shift(); // Change this line for removing in the beginning
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));