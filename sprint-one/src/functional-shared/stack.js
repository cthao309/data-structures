var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // make a copy of stackMethods
  let cloneStackMethods = {...stackMethods};

  // declare storage container
  cloneStackMethods['data'] = [];

  return cloneStackMethods;
};

var stackMethods = {};

// push method
stackMethods.push = function(value) {
  this.data.push(value);
}

// pop method
stackMethods.pop = function() {
  if(this.data.length) {
    return this.data.pop();
  }
}

// size method
stackMethods.size = function() {
  return this.data.length;
}


