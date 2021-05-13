# Chapter 5 Notes

## Hash Tables

### Hash Table

* aka: hash table, hash map, map, dictionary, associative array
* maps keys to values
* created by putting together a hash function (that returns indices) and an array (that contains values at corresponding indices)
* hashes are good for modeling relationships from one thing to another thing
* hashes are good for filtering out duplicates
* hashes are good for caching/memorizing data instead of making your server do work, eg:

```python2
cache = {} # or cache = dict()
def get_page(url):
  if cache.get(url):
    return cache(url)
  else:
    data = get_data_from_server(url)
    cache(url) = data
    return data
```

### Hash Function

* a hash function maps strings to numbers/indices
* must be consistent/deterministic
* should map different words to different numbers/indices
* returns only valid array indices
* in the real world: don't write your own, use the one built into your programming language
* a good hash function should distribute values evenly amongst available slots
* see SHA for a good hash function

#### Collisions
* when a hash function maps two values to the same key, the first value is overwritten; this is a collision
* it is nearly impossible to write a perfect (no collisions) has function
* to avoid collisions: a low load factor, a good hash function
* load factor = (number of items in hash table) / (total number of slots)
* rule of thumb is to resize total slots when load factor exceeds 0.7
* resizing is expensive, try to avoid it


#### Performance

          Hash Tables     Arrays    Linked Lists
Case    Average   Worst
Search  O(1)      O(n)    O(1)      O(n)
Insert  O(1)      O(n)    O(n)      O(1)
Delete  O(1)      O(n)    O(n)      O(1)
