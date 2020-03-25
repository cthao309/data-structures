var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create an instance prototype of the "queueMethods" object
  let instanceQueueMethods = Object.create(queueMethods);

  // create storage container
  instanceQueueMethods['data'] = [];

  // return instance
  return instanceQueueMethods;

};

var queueMethods = {};

// enqueue method
queueMethods.enqueue = function(value) {
  this.data.push(value);
}

// dequeue method
queueMethods.dequeue = function() {
  return this.data.shift();
}

// size method
queueMethods.size = function() {
  return this.data.length;
}


