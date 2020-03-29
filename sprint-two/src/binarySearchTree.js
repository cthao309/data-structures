var BinarySearchTree = function(value) {
  // declaration of the tree structure
  let bst = Object.create(TreeMethods);

  // declaration of values
  bst.value = value;
  bst.left = null;
  bst.right = null;

  // return the instance
  return bst;
};

var TreeMethods = {};

// Declaration of Methods
TreeMethods.insert = function(value) {
  // if the incoming value is less than the current root
  if(value < this.value) {
    // check if there is node on the left branch
    if(!this.left) {
      // create a new node with value equal to the incoming value and a pointer of left and right;
      this.left = BinarySearchTree(value);
    } else {
      // else if there is a left node, invoke the "insert" method on the left branch
      this.left.insert(value);
    }
    // if the incoming value is greater than the current value of this
  } else if(value > this.value) {
    // check if there is right branch
    if(!this.right) {
      // if there is no right branch, create a new node with it value and a left and right pointer
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

// method to check if the value exist in the BST
TreeMethods.contains = function(value){
  // check if the incoming value is equal to current tree value
  if(value === this.value) {
    return true;
  } else if(value > this.value) {
    // check if there is a right branch
    if(!this.right) {
      // if there is no right branch, return false. Has look through the tree
      return false
    } else {
      // if there is a right branch, recurse back on the next right brnch
      this.right.contains(value);
    }
  }
}

TreeMethods.depthFirstLog = function(callback){
  // apply callback function on the current node value
  callback(this.value)

  // execute the callback on the left branch if it exist
  if(this.left) {
    this.left.depthFirstLog(callback);
  }

  // executive the callback on the right branch if it exist
  if(this.right) {
    this.right.depthFirstLog(callback);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?

 Time: O(n)
 Space: O(n)
 */

