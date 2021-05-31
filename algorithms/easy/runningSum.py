def runningSum(arr):
  sum = 0 
  result = []
  for num in arr:
      sum += num
      result.append(sum)   
  return result



print(runningSum([1,2,3]))
print(runningSum([1,1,1]))
print(runningSum([30,10,20]))
