var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create and instance of the "stackMethods" object
  let instanceOfStackMethods = Object.create(stackMethods);

  // create a storage container
  instanceOfStackMethods['data'] = [];

  // retturn instance
  return instanceOfStackMethods;
};

var stackMethods = {};

// push method
stackMethods.push = function(value) {
  this.data.push(value);
}

// pop method
stackMethods.pop = function() {
  if(this.data.length > 0) {
    return this.data.pop();
  }
}

// size method
stackMethods.size = function() {
  return this.data.length;
}

