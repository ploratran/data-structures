var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // define properties of stack: size, storage, index
  this.index = 0;
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
  this.stackSize++;
}

Stack.prototype.pop = function() {
  if (this.stackSize > 0) {
    delete this.storage[this.index];
    this.index--;
    this.stackSize--;
    return this.storage[this.index];
  }
}

Stack.prototype.size = function() {
  return this.stackSize;
}


