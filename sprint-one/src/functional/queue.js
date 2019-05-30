var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //track of queue Size
  var queueSize = 0;
  //act like property to track current element inside queueSize during enqueue
  var index = 0;
  //keep track of the first index when dequeue
  var firstIndex = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
    queueSize++;
    //console.log('enqueue: ' + index + ': ' + value);
  };

  someInstance.dequeue = function() {
    if(queueSize > 0){
      //@firstVal: track of the first element in queue
      let firstVal = storage[firstIndex];
      delete storage[firstIndex++];
      queueSize--;
      // console.log(storage);
      // console.log('firstVal: ' + firstVal);
      return firstVal;
    }
  };

  someInstance.size = function() {
    if(queueSize < 0){
      return 0;
    }else{
      return queueSize;
    }
  };

  return someInstance;
};
