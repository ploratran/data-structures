var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //generate object that holds delegate relationship
  var someInstance = Object.create(stackMethods);
  //instantiate properties: @storage, @stackSize, @index
  someInstance.storage = {};
  //define size of stack. If size is 0 -> 0, if push, size++, if pop, size--
  someInstance.stackSize = 0;
  //act like a key of each value when adding to the stack
  someInstance.index = 0;
  return someInstance;
};

var stackMethods = {
  push: function(val){
    //console.log(this.storage);
    this.storage[this.index] = val;
    this.index++;
    this.stackSize++;
  },
  pop: function(){
    if(this.stackSize > 0){
      delete this.storage[this.index];
      this.index--;
      this.stackSize--;
      return this.storage[this.index];
    }
  },
  size: function(){
    return this.stackSize;
  }
};
