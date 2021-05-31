const runningSum = (arr) => {
  let sum = 0;
  let results = [];
  for (let num of arr) { 
    sum += num;
    results.push(sum)
  }
  return results;
}

console.log(runningSum([1,2,3]))
console.log(runningSum([1,1,1]))
console.log(runningSum([30,1,1]))