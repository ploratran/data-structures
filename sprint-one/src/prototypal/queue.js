var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //decleare an empty obj`
  //create a prototype for delegation relationship
  var someInstance = Object.create(queueMethods);
  someInstance.queueSize = 0;
  someInstance.index = 0;
  someInstance.firstIndex = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  enqueue: function(val){
    this.storage[this.index] = val;
    this.index++;
    this.queueSize++;
  },
  dequeue: function(){
    if(this.queueSize > 0){
      let firstVal = this.storage[this.firstIndex];
      delete this.storage[this.firstIndex++];
      this.queueSize--;
      return firstVal;
    }
  },
  size: function(){
    //console.log('size' + this.queueSize);
    return this.queueSize;
  }
};
