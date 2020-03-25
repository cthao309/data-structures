class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = [];
  }

  // enqueue function
  enqueue(element) {
    this.storage.push(element);
  }

  // dequence function
  dequeue() {
    return this.storage.shift();
  }

  // size function
  size() {
    return this.storage.length;
  }

}


