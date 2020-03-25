var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // make copy of queueMethods
  let cloneQueueMethods = {...queueMethods};

  // create a storage container
  cloneQueueMethods['data'] = [];

  return cloneQueueMethods;
};

var queueMethods = {};

// enqueue method
queueMethods.enqueue = function(value) {
  this.data.push(value);
}

// dequeue method
queueMethods.dequeue = function() {
  if(this.data.length) {
    return this.data.shift();
  }
}

// size method
queueMethods.size = function() {
  return this.data.length;
}


