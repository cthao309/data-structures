var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // set item as property in storage
  this._storage[item] = null;
};

setPrototype.contains = function(item) {
  // return true or false if item is in the _storage container
  return (item in this._storage);
};

setPrototype.remove = function(item) {
  // check if it is a valid property in _storage
  let isValidProp = (item in this._storage);

  if(isValidProp) {
    delete this._storage[item]
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 Time: O(1)
 Space: O(n)
 */
