const getDigits = num => {
  let results = [];
  const toStr = num.toString();
  for (let char of toStr) { 
    results.push(char);
  }
  return results
}

const selfDividingNumbers = (left, right) => {
  let results = [];
  for (let i = left; i <= right; i++) {
    let total = 0;
    let digits = getDigits(i);
    for (let digit of digits) {
      total += i % parseInt(digit)
    }
    if (total === 0 ) {
      results.push(i)
    }
  }
  return results
}

console.log(selfDividingNumbers(1, 22)) // [1,2,3,4,5,6,7,8,9,11,12,15,22]
console.log(selfDividingNumbers(1, 1)) // [1]
console.log(selfDividingNumbers(47, 85)) //[48,55,66,77]
console.log(selfDividingNumbers(66, 708)) //[66,77,88,99,111,112,115,122,124,126,128,132,135,144,155,162,168,175,184,212,216,222,224,244,248,264,288,312,315,324,333,336,366,384,396,412,424,432,444,448,488,515,555,612,624,636,648,666,672]
