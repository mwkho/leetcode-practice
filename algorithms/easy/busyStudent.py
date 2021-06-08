from typing import List
def busyStudent(startTime: List[int], endTime: List[int], queryTime: int):
  count = 0
  for i in range(len(startTime)):
    start = startTime[i]
    if (start == queryTime):
      count += 1
    elif (start < queryTime and endTime[i] >= queryTime ):
      count += 1
  return count

print(busyStudent([1,2,3], [5,6,7], 4))
print(busyStudent([1,2,4], [4,4,4], 4))
print(busyStudent([1,2,4], [2,3,4], 4))
print(busyStudent([1,2,4], [2,3,4], 5))