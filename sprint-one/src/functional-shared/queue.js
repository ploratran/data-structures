var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //@someInstance: empty obj;
  var someInstance = {};
  //instantiate obj property:
  //@queueSize: track of queue size
  someInstance.queueSize = 0;
  //@index: keep track of index in queue
  someInstance.index = 0;
  //@firstIndex: keep track of the first index when dequeue
  someInstance.firstIndex = 0;
  //@storage: an empty object that hold keys : values
  someInstance.storage = {};

  extend(someInstance, queueMethods);

  return someInstance;
};

//helper function:
//properties are copied over using the version of extend
function extend(obj1, obj2){
  for(let key in obj2){
    obj1[key] = obj2[key];
  }
};

var queueMethods = {
  enqueue: function(val){
    this.storage[this.index] = val;
    this.index++;
    this.queueSize++;
  },
  dequeue: function(){
    if(this.queueSize > 0){ //check if queue size > 0
      let firstVal = this.storage[this.firstIndex];
      delete this.storage[this.firstIndex++];
      this.queueSize--;
      return firstVal;
    }
  },
  size: function(){
    return this.queueSize;
  }
};
