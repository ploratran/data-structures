var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //console.log(list);

  //takes a value and adds it to the end of the list
  /*should designate a new tail when new nodes are added*/
  list.addToTail = function(value) {
    //create a node first with value
    var node = new Node(value);
    /*
    List start with an empty node before create new nodes
    If it's an empty node, head and tail points to the same node (empty node)
    Then, assign head to the first node
    */
    if(list.head == null && list.tail == null){
      list.head = node;
      list.tail = node;
    }
    /*
    head is always point to the first node,
    so tail is going to point to the next node until it's the last node,
    then the node.next will be null because it's not point to any other node
    */
    list.tail.next = node;
    list.tail = node;
    //console.log(node);
  };

  list.removeHead = function() {
    /* @output: return a value */
    /*
    head is point to the first node,
    when a node is deleted, head should point to the next node
    !!!! node is not delete (in linked-list) but the head points to a different node
    should have a variable = temp to hold the current head of node,
    when node is delete, temp will be the new node
    */
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  //returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null; //a reference

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
