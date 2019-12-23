var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // declare properties of Stack: 
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
      return storage[index];
    }
  };

  someInstance.size = function() {
    return stackSize;
  };
  return someInstance;
};
