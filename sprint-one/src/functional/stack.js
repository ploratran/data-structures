var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // define properties of stack: index, size
  someInstance.stackSize = 0;
  someInstance.index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance.index] = value;
    someInstance.index++;
    someInstance.stackSize++;
  };

  someInstance.pop = function() {
    if (someInstance.stackSize > 0) {
      delete someInstance.storage[someInstance.index];
      someInstance.index--;
      someInstance.stackSize--;
      return someInstance.storage[someInstance.index];
    }
  };

  someInstance.size = function() {
    return someInstance.stackSize;
  };

  return someInstance;
};
