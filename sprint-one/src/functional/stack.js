var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  //define size of stack. If size is 0 -> 0, if push, size++, if pop, size--
  var stackSize = 0;
  //act like a key of each value when adding to the stack
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
    stackSize++;
  };

  someInstance.pop = function() {
    //console.log('Size: ' + stackSize)
    delete storage[index];
    index--;
    stackSize--;
    return storage[index];
    //console.log(index  + ' ' + storage[index]);
  };

  someInstance.size = function() {
    if(stackSize < 0){
      return 0;
    }else{
      return stackSize;
    }
  };

  return someInstance;
};
