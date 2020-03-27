var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  // add the property method from treeMethods to newTree object
  newTree = Object.assign(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create the child
  let child = Tree(value);

  // add child to the child container
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // case 1: if the target is equal to the value
  if(this.value === target) {
    // return true
    return true;
  }

  // else, loop through the whole children container
  for(let i = 0; i < this.children.length; i++) {
    let child = this.children[i];

    // recursively calling
    if(child.contains(target)) {
      return true;
    }
  }

  // default to false after it has exhausted searching the children container
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?

 Time: O(n)
 Space: O(n)
 */
