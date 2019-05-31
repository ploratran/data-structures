class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  ////declare class method named constructor with properties @stackSize, @index, @storage
  constructor() {
    this.stackSize = 0;
    this.index = 0;
    this.storage = {};
  }

  //declare all other methods: pop(), push(), size()
  push(val){
    this.storage[this.index] = val;
    this.index++;
    this.stackSize++;
  }

  pop(){
    if(this.stackSize > 0){
      delete this.storage[this.index];
      this.index--;
      this.stackSize--;
      return this.storage[this.index];
    }
  }

  size(){
    return this.stackSize;
  }
}

var stack = new Stack();
