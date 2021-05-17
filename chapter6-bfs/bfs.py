from collections import deque

def search(name):
  search_queue = deque() # create a new double-ended queue
  search_queue += graph["you"] # add list of neighbors from the "you" origin node
  searched = [] # keep track of names you've already enqueued so you don't duplicate work or end up in an infinite loop

  while search_queue:
    person = search_queue.popleft() # python FIFO function
    if not person in searched:
      if person_meets_condition(person):
        print(person + " meets the condition!")
        return True
      else:
        search_queue += graph[person]
        searched.append(person)
  return False

def person_meets_condition():
  return True # example only

def graph(node):
  # return each neighbor to this node
  # depends on directed/undirected/topology
  return True; # example only
