var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  //declare @stackSize as property
  someInstance.stackSize = 0;
  //@storage: obj holds keys: values
  someInstance.storage = {};
  //@index: track current index in stack
  someInstance.index = 0;

  extend(someInstance, stackMethods);
  //console.log(someInstance);
  return someInstance;
};

//helper function: properties are copied over using the version of extend
function extend(obj1, obj2){
  for(let key in obj2){
    obj1[key] = obj2[key];
  }
};
var stackMethods = { //global methods object
  push: function(val){
    //console.log(this.index);
    this.storage[this.index] = val;
    //console.log(val);
    this.index++;
    //console.log(this.index)
    this.stackSize++;
    //console.log('storage: ' + this.storage);
  },
  pop: function(){
    if(this.stackSize > 0){ //check if the stackSize > 0 after pushing
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
