

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // get the index of the key
  var index = getIndexBelowMaxForKey(k, this._limit);

  // retreive the data set
  let buckets = this._storage.get(index) || [];

  // loop through the dataset
  for(let i = 0; i < dataContainer.length; i++) {
    let tuples = dataContainer[i];




  }


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


