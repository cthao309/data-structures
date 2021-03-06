class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // declaration of storage container
    this.data = {};
    this.start = 0;
    this.end = 0;
  }

  // enqueue function
  enqueue(value) {
    this.data[this.start] = value;
    this.start++;
  }

  // dequence function
  dequeue() {
    let isEmptyObj = (this.end in this.data)

    if(isEmptyObj) {

      // Store the dequeue value
      let dequeueValue = this.data[this.end];

      // remove it from the this.data object
      delete this.data[this.end];

      // increment the pointer of "end"
      this.end++;

      // return the dequeue value
      return dequeueValue;
    }

  }

  // size function
  size() {
    return this.start - this.end;
  }

}


