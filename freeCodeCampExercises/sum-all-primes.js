function sumPrimes(num) {
  let sumNum = 0

  function isPrime(number) {
    let counter = 0
    for (let i = number; i > 0; i--) {
      if (number % i == 0) {
        counter++
      }
    }
    if (counter > 2) {
      return false;
    } else { return true }
  }

  for(let i=num; i>1; i--){
    if (isPrime(i)){
      sumNum += i
    }
  }
  return sumNum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));