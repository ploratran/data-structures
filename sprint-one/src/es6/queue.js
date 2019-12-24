class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // define properties:
    this.storage = {};
    this.queueSize = 0;
    this.index = 0;
    this.firstIndex = 0;
  }

  // define methods: 
  enqueue(value) {
    this.storage[this.index++] = value;
    this.queueSize++;
  }

  dequeue() {
    if (this.queueSize > 0) {
      let front = this.storage[this.firstIndex];
      delete this.storage[this.firstIndex];
      this.firstIndex++;
      this.queueSize--;
      return front;
    }
  }

  size() {
    return this.queueSize;
  }
};

const newQueue = new Queue();





