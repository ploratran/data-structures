var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
  };

  // define properties of stack: 
  let stackSize = 0;
  let index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index++] = value; 
    stackSize++;
  };

  someInstance.pop = function() {
    if (stackSize > 0) {
      delete storage[index];
      index--;
      stackSize--;
      return storage[index]; // return the current value at stack after removing a value
    } else {
      stackSize === 0;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
