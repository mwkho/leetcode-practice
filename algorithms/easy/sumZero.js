const sumZero = (n) => {
  let result = n % 2 ? [0] : [] 
  const mid = Math.floor(n/2);
  for (let i = 1; i <= mid; i++) { 
    result.push(i)
    result.push(-i)
  }
  return result
}

console.log(sumZero(1)) //[0]
console.log(sumZero(2)) //[-1, 1]
console.log(sumZero(3)) //[0, 1, -1]
console.log(sumZero(100)) //[1, -1, 2, -2, ..., 50, -50]