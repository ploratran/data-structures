var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // create obj:
  let someInstance = Object.create(queueMethods);

  // define properties:
  someInstance.storage = {};
  someInstance.queueSize = 0;
  someInstance.index = 0;
  someInstance.firstIndex = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index++] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  // keep track of front value:
  if (this.queueSize > 0) {
    let front = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    this.queueSize--;
    return front;
  } else {
    this.queueSize === 0;
  }
};

queueMethods.size = function() {
  return this.queueSize;
};
