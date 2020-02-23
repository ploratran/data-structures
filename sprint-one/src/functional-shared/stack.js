var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  let someInstance = {};
  // define all properties of someInstance: size, index, storage
  someInstance.storage = {};
  someInstance.stackSize = 0;
  someInstance.index = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  // define stackMethods: 
  push(value) {
    this.storage[this.index] = value;
    this.stackSize++;
    this.index++;
  }, 
  pop() {
    if (this.stackSize > 0) {
      delete this.storage[this.index];
      this.index--;
      this.stackSize--;
      return this.storage[this.index];
    }
  }, 
  size() {
    return this.stackSize; 
  }
};




