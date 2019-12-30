var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = new Node(value);
    // if only 1 node, head and tail point to same node
    // only need to check if head is null:
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    }
    // if there are more than 1 node, head is always the first node
    // tail is the next node
    // if node.next is null, tail is the last node:
    else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    // head is always available from addToTail()
    // have variable temp to keep track of head
    // head is not delete, but point to the next node
    let temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {
    // have variable temp to keep track of head of list: 
    let temp = list.head;
    // loop through 
    // if list is not null: 
    while (temp) {
      // check if the current node value is equal to target:
      if (temp.value === target) {
        return true
      }
      // traverse to next node: 
      // cannot use list.head.next because list.head is always the first node
      temp = temp.next;
    }
    // else return false:
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 linear ==> O(n)
 */