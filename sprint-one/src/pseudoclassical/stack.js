var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // declaration of storage container
  this.data = [];
};

// push method
Stack.prototype.push = function(value) {
  this.data.push(value);
}

// pop method
Stack.prototype.pop = function() {
  if(this.data.length) {
    return this.data.pop();
  }
}

// size method
Stack.prototype.size = function() {
  return this.data.length;
}

