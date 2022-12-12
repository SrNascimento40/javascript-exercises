function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [2], [3, 4]]));