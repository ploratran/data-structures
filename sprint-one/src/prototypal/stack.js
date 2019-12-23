var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // create prototype for Stack: 
  let someInstance = Object.create(stackMethods);

  // define properties:
  someInstance.storage = {};
  someInstance.stackSize = 0;
  someInstance.index = 0;

  // return obj: 
  return someInstance;
};

// Stack methods: 
var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index++] = value;
  this.stackSize++;
};

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    delete this.storage[this.index];
    this.stackSize--;
    this.index--;
    return this.storage[this.index];
  }
};

stackMethods.size = function() {
  return this.stackSize;
};


