function factorialize(num) {
  for (let i = num; i > 1; i--) {
    num = num * (i - 1)
  }
  if (num === 0) { return 1 }
  else {
    return num;
  }
}

factorialize(5);