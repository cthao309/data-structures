var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // declaration of storage container
  this.data = {};
  this.length = 0;
};

// push method
Stack.prototype.push = function(value) {
  this.data[this.length] = value;
  this.length++;
}

// pop method
Stack.prototype.pop = function() {
  // decement the length of the object;
  this.length && this.length--;

  // if the storage container is not empty
  if(this.length >= 0) {
    // Store the pop value
    let popValue = this.data[this.length];

    // remove it from the this.data object
    delete this.data[this.length];

    // return the dequeue value
    return popValue;
  }

  return this.length;

}

// size method
Stack.prototype.size = function() {
  return this.length;
}

