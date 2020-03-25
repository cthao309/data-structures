var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if(!storage['data']) {
      storage['data'] = [value];
      storage['createdStorageContainer'] = true;
    } else {
      storage['data'].push(value);
    }
  };

  someInstance.dequeue = function() {
    if(storage.hasOwnProperty('data') && storage['data'].length) {
      return storage['data'].shift();
    }
  };

  someInstance.size = function() {
    if(storage.hasOwnProperty('data')) {
      return storage['data'].length;
    } else {
      // condition to check when use try to retreive the size of the queue but have not created such container for the data to be store
      if(!storage['createdStorageContainer']) {
        storage['data'] = [];
        return storage['data'].length;
      }
    }
  };

  return someInstance;
};
