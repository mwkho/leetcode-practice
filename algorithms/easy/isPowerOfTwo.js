const isPowerOfTwo = (n) => {
  for (let i = 1; i <= n; i = i* 2){
    if (i === n){
      return true
    }
    if (i * 2 > n) { 
      return false
    }
  }
  return false
}

console.log('isPowerOfTwo(3)', isPowerOfTwo(0))