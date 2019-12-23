var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here

  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  // console.log(newTree);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  /**
   * create a node
   * assign the value to the node
   * Assign child to the new node
   */
  // var i = 0;
  var newNode = Tree(value);
  this.children.push(newNode);
  // i++
};

treeMethods.contains = function (target) {
  /**
   * base case: if target === value {return true};
   * base case: else if it does not have children,length === 0 {return false};
   * else if it does have children send to recrussive function;
   */
  var num = 0
  var node = this

  var recurssion = function (node) {

    if (node.value === target) {
      return true
    } else if (node.children.length === 0) {
      return false
    }
    else {

      for (var i = 0; i < node.children.length; i++) {
        return recurssion(node.children[i])
      }
    }

  }
  return recurssion(node)
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
