class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.data = {};
    this.length = 0;
  }

  // push method
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  // pop method
  pop() {
    // if the storage container is not empty
    if(this.length === 0) {
      return undefined;
    } else {
      // decement the length
      this.length--;

      // Store the pop value
      let popValue = this.data[this.length];

      // remove it from the this.data object
      delete this.data[this.length];

      // return the dequeue value
      return popValue;
    }
  }

  // size method
  size() {
    return this.length;
  }
}