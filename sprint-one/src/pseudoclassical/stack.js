var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //instantiate properties of stack:
  //@stackSize, @storage, @index
  this.stackSize = 0;
  this.storage = {};
  this.index = 0;

};

Stack.prototype.push = function(val){
  this.storage[this.index] = val;
  this.index++;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  if(this.stackSize > 0){
    delete this.storage[this.index];
    this.index--;
    this.stackSize--;
    return this.storage[this.index];
  }
};

Stack.prototype.size = function(){
  return this.stackSize;
};
