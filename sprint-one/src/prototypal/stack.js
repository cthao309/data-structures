var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create and instance of the "stackMethods" object
  let instanceOfStackMethods = Object.create(stackMethods);

  // create a storage container
  instanceOfStackMethods['storage'] = {};
  instanceOfStackMethods.index = 0;

  // retturn instance
  return instanceOfStackMethods;
};

var stackMethods = {};

// push method
stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
}

// pop method
stackMethods.pop = function() {
  if(this.index === 0) {
    return undefined;
  } else {
    this.index--;

    let popValue = this.storage[this.index];

    delete this.storage[this.index];

    return popValue;
  }
}

// size method
stackMethods.size = function() {
  return this.index;
}

