function findSmallest(inputArray) {
  let currentSmallest = inputArray[0]
  let smallestIndex = 0
  for (let index = 1; index < inputArray.length; index += 1) {
    if (inputArray[index] < currentSmallest) {
      currentSmallest = inputArray[index]
      smallestIndex = index
    }
  }
  return smallestIndex
}

function selectionSort(inputArray) {
  const outputArray = []
  while (inputArray.length) {
    const smallestIndex = findSmallest(inputArray)
    // splice returns an array containing a single element
    // since there was only one item removed from the input array
    // need the [0] index to get the value instead of an array
    outputArray.push(inputArray.splice(smallestIndex, 1)[0])
  }
  return outputArray
}

console.log(selectionSort([5,3,6,2,10]))
console.log(selectionSort([1,3,5,7,9]))
console.log(selectionSort([9,7,5,3,1]))
