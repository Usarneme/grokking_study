# Chapter 2 Notes

## Arrays

Key points:

* Arrays are of a fixed size so every time you add an item you actually are copying all the items in the array to a new memory location so your data is contiguous. 
* You can ask for more space (malloc) ahead of time but unless you're certain of the eventual max number of items in your array you may end up having to move them to a new memory address anyway. 
* Arrays allow for constant time reading but are slower at insertion; especially inserting in the middle as opposed to appending to the end of the set of items
* Random access


## Linked Lists

Key points:

* Linked lists are a data structure that contain a value and a pointer/reference to the location of the next available memory address. This allows them to be non-contiguous and allows adding items without any resizing. 
* Drawback can be traversal and removing items (depending on double/singly LL). You can't get an arbitrary value by index instead you have to go to each item to get the reference/location of the next item until you find what you want. 
* Lists are better for situations with multiple insertions but few reads
* Lists allow for easily adding items to the middle of the list without having to reorder or rebuild the entire set of items
* Sequential access


Takeaways/Big O:

Array
	Reading: O(1)
	Insertion: O(n)
	Deletion: O(n)

Linked List
	Reading: O(n)
	Insertion: O(1)
	Deletion: O(1)

