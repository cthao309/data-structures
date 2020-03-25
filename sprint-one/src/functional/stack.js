var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if('data' in storage) {
      storage['data'].push(value)
    } else {
      storage['data'] = [value];
    }
  };

  someInstance.pop = function() {
    if('data' in storage && storage['data'].length) {
      return storage['data'].pop();
    }
  };

  someInstance.size = function() {
    if('data' in storage) {
      return storage['data'].length
    } else {
      storage['data'] = [];
      return storage['data'].length;
    }
  };

  return someInstance;
};
