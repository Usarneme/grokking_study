# Chapter 8 Notes

## Greedy Algorithms

#### Key points:

- NP-complete problems and how to identify them
- approximation algorithms
- greedy strategy for problem solving
- greedy algorithms optimize locally, hoping to end up with a global optimum solution
- NP-complete problems have no known fast solution
- if you have an NP-complete problem, your best bet is to use an approximation algorithm
- sets are a data structure that are similar to arrays/lists but have no repeated elements

#### Approximation Algorithm Examples

- classroom scheduling problem: search for the class that ends the soonest, pick that, then repeat finding the next class that ends the soonest, repeat until you run out of classes or time
- knapsack problem: greedy algorithm doesn't work because there is a combination of value and weight/size to take into account, so the local/initial optimum choice may not make for an optimum full solution
- set-covering problem: 1) pick a set that covers the most area that hasn't been covered yet (it's ok if there is some overlap), 2) repeat step 1 until (nearly) all area has been covered


#### Set Functions

- union: combine two sets into a new set of all unique elements
- intersection: combine two sets into a new set containing only elements present in both original sets
- difference: subtract one set from another to get a third set containing only elements not present in both original sets

```python
# union
one = set(["a","b","c"])
two = set(["c","d","e"])
one | two # => set(["a","b","c","d","e"])

# intersection
one & two # => set(["c"])

# difference
one - two # => set(["a","b"])
```
