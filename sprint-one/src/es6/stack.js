class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = [];
  }

  // push method
  push(element) {
    this.storage.push(element);
  }

  // pop method
  pop() {
    return this.storage.pop();
  }

  // size method
  size() {
    return this.storage.length;
  }
}