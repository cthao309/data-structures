var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree = Object.assign(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);

  this.children.push(child);
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }

  for(let i = 0; i < this.children.length; i++) {
    let child = this.children[i];

    if(child.contains(target)) {
      return true;
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
