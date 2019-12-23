var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //instantiate properties: @queueSize, @index, @firstIndex, @storage
  this.queueSize = 0;
  this.index = 0;
  this.firstIndex = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(val){
  this.storage[this.index] = val;
  this.index++;
  this.queueSize++;
};

Queue.prototype.dequeue = function(){
  if(this.queueSize > 0){
    var firstVal = this.storage[this.firstIndex];
    delete this.storage[this.firstIndex++];
    this.queueSize--;
    return firstVal;
  }
};

Queue.prototype.size = function(){
  return this.queueSize;
};
