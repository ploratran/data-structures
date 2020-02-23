var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // define properties:
  this.storage = {};
  this.queueSize = 0;
  this.index = 0;
  this.firstIndex = 0;
};

// define methods:
Queue.prototype.enqueue = function(value) {
  this.storage[this.index++] = value;
  this.queueSize++;
};

Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) {
    var front = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex];
    this.firstIndex++;
    this.queueSize--;
    return front; 
  }
}

Queue.prototype.size = function() {
  return this.queueSize;
};

