# Chapter 4 Notes

## Recursion & Quicksort

### Divide-and-conquer

* a general technique for breaking a problem into smaller sub-problems and attempting to solve the sub-problems repeatedly until the larger problem is also solved
* Divide-and-conquer steps: 1) figure out a simple case as the base case. 2) Figure out how to reduce your problem to get to the base case.

ex. sum all values in an array
func sumRecurDNC(arr) {
  if (arr.length === 1) return arr[1] //  base case
  return arr[0] + sumRecurDNC(arr.slice(1)) // recursive/divide and conquer case
}

ex. find max number in an array
func maxValueDNC(arr, max = 0) {
  if (arr.length === 1) {
    if (arr[0] > max) {
      return arr[0]
    } else {
      return // need something here?
    }
  } else {
    if (arr[0] > max) {
      max = arr[0]
      maxValueDNC(arr.slice(1), max)
    }
  }
}

### Quicksort

1. pick a pivot
2. partition elements into two sub-arrays: elements less than the pivot and elements greater than the pivot
3. call quicksort recursively on the two sub-arrays


### General Takeaways:

* Often recursive solutions to problems involving arrays the base case is an array of length = 0 or 1; work backwards from there if the solution is not immediately apparent.
* Haskell doesn't have loops; only recursion to solve problems. This is a hallmark of functional programming.
* Inductive proofs consist of a base case and an inductive case. If we can prove the algorithm works for the base case then it will work for the inductive case via D&C/one step at a time.

