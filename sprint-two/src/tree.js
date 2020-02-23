var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // newTree.children = null;  // fix me
  newTree.children = []; // an array

  // functional-shared:
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // let node = new Tree(value);
  let node = new Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {

  // have variable flag to keep track of boolean: 
  let flag = false;

  // define a recursion function
  const recursion = (children, target) => {
    // base case: if children is empty, return false
    if (this.children.length === 0) {
      flag = false;
    }
    else {
      // loop through children: 
      for (let i = 0; i < children.length; i++) {
        // console.log('children: ', children);     
        // base case: check if value of children matches with target: 
        if (children[i].value === target) {
          flag = true;
        } 
        // recursion: 
        recursion(children[i].children, target);
      }
      return flag;
    }
  }; 

  return recursion(this.children, target);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
