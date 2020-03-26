var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let start = 0;
  let end = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[start] = value;
    start++;
  };

  someInstance.dequeue = function() {
    let isEmptyObj = (end in storage)

    if(isEmptyObj) {
      let dequeueValue = storage[end];

      delete storage[end];

      end++;

      return dequeueValue;
    }
  };

  someInstance.size = function() {
    return start - end;
  };

  return someInstance;
};
