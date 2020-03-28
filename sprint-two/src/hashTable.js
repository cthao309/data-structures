

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // get the index of the key
  var index = getIndexBelowMaxForKey(k, this._limit);

  // retreive the data set
  let buckets = this._storage.get(index) || [];

  // iterate through the bucket to find if the key is already there
  for(let i = 0; i < buckets.length; i++) {
    let tuple = buckets[i];

    if(tuple[0] === k) {
      // replace the old at tuple[0] to the new value
      tuple[1] = v;
    }
  }

  // push the
  buckets.push([k, v]);
  this._storage.set(index, buckets);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // retreive the data set
  let buckets = this._storage.get(index);

  // iterate through the bucket to find the k
  for(let i = 0; i < buckets.length; i++) {
    let tuple = buckets[i];

    return tuple[0] === k ? tuple[1] : false;
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let buckets = this._storage.get(index);

  for (let i = 0; i < buckets.length; i++) {
    let tuple = buckets[i];
    if (tuple[0] === k) {
      buckets.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


