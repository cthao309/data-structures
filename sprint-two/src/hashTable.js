

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

  // iterate through the bucket to find if the key is already there
  for(let i = 0; i < buckets.length; i++) {
    let tuple = buckets[i];

    if(tuple[0] === k) {
      // replace the old at tuple[0] to the new value
      tuple[1] = v;
    }
  }

  // push the tuple in
  buckets.push([k, v]);

  // increment the size
  this.size++;

  // a [bob's value, null , null, null, null, null, null, null null null kevin's value] kenvin = index 9.

  // check if size is 75% of capacity
  if (this.size === Math.ceil(this._limit*0.75)) {
    this.resize();
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

  // loop through the data set
  for (let i = 0; i < buckets.length; i++) {
    let tuple = buckets[i];
    if (tuple[0] === k) {
      buckets.splice(i, 1);
    }
  }
};

// function to determine the size and double the length
HashTable.prototype.resize = function() {
  // double in size when it reach array length of 75%
  this._limit = this._limit * 2;
  this._storage = LimitedArray(this._limit);
}



/*
 * Complexity: What is the time complexity of the above functions?
 */


