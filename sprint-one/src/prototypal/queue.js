var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create an instance prototype of the "queueMethods" object
  let instanceQueueMethods = Object.create(queueMethods);

  // create storage container
  instanceQueueMethods['storage'] = {};
  instanceQueueMethods.start = 0;
  instanceQueueMethods.end = 0;

  // return instance
  return instanceQueueMethods;

};

var queueMethods = {};

// enqueue method
queueMethods.enqueue = function(value) {
  this.storage[this.start] = value;
  this.start++;
}

// dequeue method
queueMethods.dequeue = function() {
  let isEmptyObj = (this.end in this.storage);

  if(isEmptyObj) {
    let dequeueValue = this.storage[this.end];

    delete this.storage[this.end];

    this.end++;

    return dequeueValue;
  }
}

// size method
queueMethods.size = function() {
  return this.start - this.end;
}


