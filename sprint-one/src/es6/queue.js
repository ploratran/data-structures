class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    //declare class method named constructor with properties @queueSize, @index, @firstIndex, @storage
    this.queueSize = 0;
    this.index = 0;
    this.firstIndex = 0;
    this.storage = {};
  }

  //declare other methods: enqueue(), dequeue(), size()
  enqueue(val){
    this.storage[this.index] = val;
    this.index++;
    this.queueSize++;
  }

  dequeue(){
    if(this.queueSize > 0){
      var firstVal = this.storage[this.firstIndex];
      delete this.storage[this.firstIndex++];
      this.queueSize--;
      return firstVal;
    }
  }
  
  size(){
    return this.queueSize;
  }
}

var queue = new Queue();
