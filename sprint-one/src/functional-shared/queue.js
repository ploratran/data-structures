var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = {};

  // define properties:
  someInstance.storage = {};
  someInstance.queueSize = 0;
  someInstance.index = 0;
  // track the index of front value:
  someInstance.firstIndex = 0;

  // invoke queueMethods:
  _.extend(someInstance, queueMethods);
  
  // return obj:
  return someInstance;
};


var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index++] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    // track front value:
    let front = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    this.queueSize--;
    return front;
  }
};

queueMethods.size = function() {
  return this.queueSize;
}
