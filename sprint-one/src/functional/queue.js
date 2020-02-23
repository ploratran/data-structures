var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  // define Queue properties:
  let size = 0;
  let index = 0;
  // keep track of front of queue:
  let firstIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index++] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      // keep track of front of queue:
      let front = storage[firstIndex];
      delete storage[firstIndex];
      firstIndex++;
      size--;
      return front;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
