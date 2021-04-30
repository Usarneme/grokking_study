function binarySearch(list, target) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.round((low + high) / 2)
    const guess = list[mid]

    if (guess === target) {
      return mid
    }
    if (guess > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}

const myList = [1,3,5,7,9]
console.log(binarySearch(myList, 3))
console.log(binarySearch(myList, -5))
console.log(binarySearch(myList, 6))
console.log(binarySearch(myList, 7))
