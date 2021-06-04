# Chapter 9 Notes

## Dynamic Programming

* dynamic programming: a technique to solve a hard problem by break it up into subproblems and solving those subproblems first
* a simple solution may include checking for each possible solution then comparing all solutions for the best/optimal overall; this is untenable as O(2^n) becomes incredibly large with relatively small n's (eg: 3 items = 2^3 = 8 solutions to compare, 5 items = 2^5 = 32, 32 items = 2^32 = ~4billion solutions to compare)
* dp is useful when you're trying to optimize something given a constraint
* you can use dp when the problem can be broken into descrete sub-problems that do NOT depend on one another
* longest common substring - try to find the longest substring that two words have in common
* longest common subsequence - this is similar but distinct from the substring as it compares words with differing letters but looks for commonalities in substring and position overall
* Levenshtein distance measures how similar two strings are
* with dynamic programming you typically start with a grid to compare your two constraints
* the values in the cells are usually what we're trying to optimize
* each cell in the grid is a sub-problem (think about how to divide your problem into sub-problems)


#### The Knapsack Problem

guitar: weight 1, value 1500
laptop: weight 3, value 2000
stereo: weight 4, value 3000

* using DP to find a solution for the subproblem, then iterate until you've solved all subproblems. your grid is the item weight/size in columns and item/value in the rows

        1       2       3       4
guitar  1500g   1500g   1500g   1500g
stereo  1500g   1500g   1500g   3000s
laptop  1500g   1500g   2000l   3500lg

* max value retrievable is the combination of laptop and the guitar at 3+1= 4lbs

> gridCell[row][col] = max of either:
>  1. the previous max (value at gridCell[row - 1][col]), or
>  2. value of the current item + the value of the remaining space which is gridCell[row - 1][col - currentItemWeight]

* since you are keeping track of the values at each pass, adding an item doesn't change the previous calculated grid values
* reversing the order and going col->row instead of row->col does not change the outcome/optimal solution
* drawback: you can't take a partial item, you either take the item or you do not there is not a way to calculate if you should take half/part of an item
* you will never have more than two sub-knapsacks, however one of your two sub-knapsacks may itself contain 1+ sub-knapsack (ie: you can't have 3, but you can have 2 where one of the 2 itself holds 2 sub-sub-knapsacks)
* it is possible the best/optimal solution does not completely fill the knapsack (eg: diamond weighs 4lb value $1mil leaves you with empty space but the highest total value)

