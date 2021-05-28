# Chapter 7 Notes

## Dijkstra's Algorithm

* weighted graphs
* Dijkstra's algorithm -> what's the shortest path to X for weighted graphs
* cycles in graphs
* only works with directed, acyclic graphs (DAGs)
* can't be used with negative weights (if negative weights, use Bellman-Ford algorithm)

### Dijkstra's Algorithm

1. find the "cheapest" node - the one with the lowest weight
2. update the costs of the neighbors of this node
3. repeat until you've done this for every node
4. calculate the final path - lowest total weight

costs table
```python
infinity = float("inf")
costs = {}
costs["a"] = 6
costs["b"] = 2
costs["finish"] = infinity
```

parents table
```python
parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["finish"] = None
```

find lowest cost node
```python
def find_lowest_cost_node(costs):
  lowest_cost = float("inf")
  lowest_cost_node = None
  for node in costs:
    cost = costs[node]
    if cost < lowest_cost and node not in processed:
      lowest_cost = cost
      lowest_cost_node = node
  return lowest_cost_node
```

find node
```python
node = find_lowest_cost_node(costs)
while node is not None:
  cost = costs[node]
  neighbors = graph[node]
  for n in neighbors.keys():
    new_cost = cost + neighbors[n]
    if costs[n] > new_cost:
      costs[n] = new_cost
      parents[n] = node
  processed.append(node)
  node = find_lowest_cost_node(costs)
```

