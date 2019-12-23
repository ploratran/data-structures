var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // define object: 
  let someInstance = {};

  // define Stack properties:
  someInstance.storage = {};
  someInstance.stackSize = 0;
  someInstance.index = 0;
  
  // invoke stackMethods' methods:
  _.extend(someInstance, stackMethods);

  // return obj:
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index++] = value;
  this.stackSize++;
  return stackMethods;
};
stackMethods.pop = function() {
  if (this.stackSize > 0) {
    delete this.storage[this.index];
    this.index--;
    this.stackSize--;
    return this.storage[this.index];
  }
};
stackMethods.size = function() {
  return this.stackSize;
};
