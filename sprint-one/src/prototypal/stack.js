var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // use Object.create() => create prototypal methods of stack:
  let someInstance = Object.create(stackMethods);

  // define properties of stack: index, size, storage
  someInstance.storage = {};
  someInstance.stackSize = 0;
  someInstance.index = 0; 

  return someInstance;
};

var stackMethods = {
  push(value) {
    this.storage[this.index] = value;
    this.index++;
    this.stackSize++;
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


