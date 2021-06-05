const toDict = s => {
  let result = {}
  for (let char of s) {
    if (!result[char]) {
      result[char] = 1
    } else {
      result[char] += 1
    }
  }
  return result
}
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false
  }
  const sDict = toDict(s)
  const tDict = toDict(t)
  
  for (let key of Object.keys(sDict)) {
    if (sDict[key] !== tDict[key]){
      return false
    }
  }
  return true
}





console.log(isAnagram('rat', 'car')) // false
console.log(isAnagram('rat', 'tare')) // false
console.log(isAnagram('rate', 'tar')) // false
console.log(isAnagram('rat', '')) // false
console.log(isAnagram('rat', 'tar')) // true

