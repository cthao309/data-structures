

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  // get the index of the key
  var index = getIndexBelowMaxForKey(k, this._limit);

  // retreive the data set
  let buckets = this._storage.get(index) || [];

  let isFound = false;

  // iterate through the bucket to find if the key is already there
  for(let i = 0; i < buckets.length; i++) {
    let tuple = buckets[i];

    if(tuple[0] === k) {
      // replace the old at tuple[0] to the new value
      tuple[1] = v;
      isFound = true;
      break;
    }
  }

  if(!isFound) {
    // push the tuple in
    buckets.push([k, v]);

    // increment the size
    this.size++;
  }


  // a [bob's value, null , null, null, null, null, null, null null null kevin's value] kenvin = index 9.

  // check if size is 75% of capacity
  if (this.size > this._limit * 0.75) {
    this.resize(this._limit * 2);
  }

  this._storage.set(index, buckets);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // retreive the data set
  let buckets = this._storage.get(index);

  // iterate through the bucket to find the k
  for(let i = 0; i < buckets.length; i++) {
    let tuple = buckets[i];

    if(tuple[0] === k) {
      return tuple[1];
    }
  }

  return undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // retreive the data set
  let buckets = this._storage.get(index);

  if(!buckets) {
    return;
  }

  // loop through the data set
  for (let i = 0; i < buckets.length; i++) {
    let tuple = buckets[i];
    if (tuple[0] === k) {
      buckets.splice(i, 1);

      this.size--;
      // check if size is 75% of capacity
      if (this.size > this._limit * 0.25) {
        this.resize(this._limit/2);
      }

      return tuple[1];
    }
  }

  return null;
};

// function to determine the size and double the length
HashTable.prototype.resize = function(newLimit) {
  // double in size when it reach array length of 75%
  let oldStorage = this._storage;

  this._limit = newLimit;

  this._storage = LimitedArray(newLimit);

  this.size = 0;

  // iterate over told storage and re-insert
  oldStorage.each(function(bucket) {
    if(!bucket) {
      return;
    }

    for(let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];

      this.insert(tuple[0], tuple[1])
    }
  }.bind(this));
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


