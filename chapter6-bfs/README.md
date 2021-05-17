# Chapter 6 Notes

## Breadth First Search

#### Key points:
- model a network using a graph
- graphs are comprised of nodes and edges
- neighbor nodes are first-degree to the origin
- each node that separates you from the origin increases the degree (2nd degree are separated by 1 node, etc.)
- breadth first search can be run on graphs to:
  a. determine if there is a route between two nodes
  b. find the shortest path to a node (solve a shortest-path problem)
- BFS searches all first-degree nodes, then moves up degree by degree until a match is found; in this way it finds the shortest path between nodes
- searching all first degree nodes is handled via a queue data structure, first in first out processing ensures the shortest path is returned
- directed/undirected graphs
- topological sort to expose dependencies between nodes - if nodes are put in order where each neighbor relies on it's previous node being completed before it can be started
- a tree is a special type of graph where no edges ever point back/refer to a previous node in the graph

#### Queue
- you can't do random search in a queue
- there are only two methods: enqueue and dequeue
- enqueue adds a new node/element to the end of the list
- dequeue removes the first element in the list

#### Graph
- can be implemented via key-value pairs such as in a hash table
- directed graphs have arrows and connections can be uni- or bi-directional
- undirected graphs do not have arrows and each node is considered a neighbor to any node connected to it by an edge

##### Steps to implement a graph
1. create a queue containing all the neighbors to the source/origin
2. pop off/dequeue the first neighbor
3. check if that person meets the search condition
3a. if yes, you're done
3b. if no, add all of this node's neighbors to the end of your queue
4. back to step 2 until you run out of nodes (you'll either find the path, or determine no path exists to satisfy the search condition when out of nodes)


directed unidirectional graph:
```python2
graph = {}
graph["you"] = ["alice","bob","claire"]
graph["alice"] = ["dave","ella"]
graph["bob"] = ["dave","fela"]
```

#### Big O/Runtime

- adding person to the queue takes O(1) so enqueueing takes O(n) where n = number of nodes/vertices
- search time is also O(1) for each of the endges so O(n) where n = number of edges
- total Big O is O(vertices + edges) or O(V+E)
