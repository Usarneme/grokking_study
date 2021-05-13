const quickSort = inputArray => {
  if (inputArray.length < 2) return inputArray
  const pivot = inputArray[0]
  const less = []
  const greater = []
  for (let i = 1; i < inputArray.length; i += 1) {
    if (inputArray[i] <= pivot) {
      less.push(inputArray[i])
    } else {
      greater.push(inputArray[i])
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort([10, 5, 2, 3]))
console.log(quickSort([6, 33, 12, 23, 234, 1]))
console.log(quickSort([1,2,3,4,5]))
