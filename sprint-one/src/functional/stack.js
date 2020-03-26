var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    if(index === 0) {
      return undefined;
    } else {
      index--;

      let popValue = storage[index];
      delete storage[index];

      return popValue;
    }
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
