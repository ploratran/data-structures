class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  ////declare class method named constructor with properties @stackSize, @index, @storage
  constructor() {
    // define properties:
    this.storage = {};
    this.index = 0;
    this.stackSize = 0;
  }

  // define Stack methods: 
  push(value) {
    this.storage[this.index++] = value;
    this.stackSize++;
  }

  pop() {
    if (this.stackSize > 0) {
      delete this.storage[this.index];
      this.index--;
      this.stackSize--;
      return this.storage[this.index];
    }
  }

  size() {
    return this.stackSize;
  }
}

// instantiate new Stack obj:
const stack = new Stack();
