def quicksort(array):
  if len(array) < 2:
    return array #the base case as array size 0 or 1 is already sorted
  else:
    pivot = array[0]
    less = [i for i in array[1:] if i <= pivot] # all elements less then/eq to pivot
    greater = [i for i in array[1:] if i > pivot] # all elements greater than pivot
    return quicksort(less) + [pivot] + quicksort(greater)

print(quicksort([10, 5, 2, 3]))
print(quicksort([6, 33, 12, 23, 234, 1]))
print(quicksort([1,2,3,4,5]))