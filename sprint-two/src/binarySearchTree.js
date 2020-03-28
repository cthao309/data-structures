var BinarySearchTree = function(value) {
  // declaration of the tree structure
  var Tree = {};

  _.extend(Tree, TreeMethods); //

  // declaration of the root
  Tree.root = TreeMethods.createNode(value);

  return Tree;
};

var TreeMethods = {};

// Declaration of Methods
TreeMethods.insert = function(value) {
  // if there exist a root
  if(this.root === null) {
    // create a root node with a left and right pointer
    this.root = this.createNode(value); // { value: 15, left: null, right: null }
  } else {
    // compare the incoming value with root node
    if(value < this.root.value) {
      // invoke helper function to tranverse through the tree on the left branch
      this.tranverse(this.root, value, 'left')
    } else {
      // invoke helper function to tranverse through the tree on the right branch
      this.tranverse(this.root, value, 'right')
    }
  }
}

// Declaration of helper function to tranverse through the tree. Input will be the current node and the incoming value
TreeMethods.tranverse = function(node, value, branch) {
  if(branch === 'left') {
    if(node.left === null) { // { value: 15, left: null, right: null }
      // create the left node with a left and right pointer
      node.left = this.createNode(value); // { value: 10, left: null, right: null }

      // // connect this left node to the root
      // this.root.left = this.left; // { value: 15, left: { value: 10, left: null, right: null }, right: null }
    } else {
      // there exist a left branch, compare the left value with incoming value

      // current input coming in: 15, 10, 5, 7

      let currentLeftNode = node.left; // currentLeftValue = { value: 10, left: null, right: null }

      // create the a new node with the incoming value
      let newNode = this.createNode(value);

      if(value < currentLeftNode.value) {
        // set our current left to the new node
        currentLeftNode.left = newNode;
      } else {
        // set our current right to the new node
        currentLeftNode.right = newNode
      }
    }
  }

  if(branch === "right") {
    if(node.right === null) {
      // if there is no right node from the root node, then set the incoming node to be the right branch
      node.right = this.createNode(value);
    } else {
      // there exist a right branch
      let currentRightNode = node.right;

      // create the a new node with the incoming value
      let newNode = this.createNode(value);

      // compare the right value with incoming value
      if(value < currentRightNode.value) {
        // set our current left to the new node
        currentRightNode.left = newNode;
      } else {
        // set our current right to the new node
        currentRightNode.right = newNode
      }
    }
  }
}

// Declaration of helper function that create a new node with key/value and a left, right pointer.
TreeMethods.createNode = function(value) {
  // e.x. value = 3; node = { value: 3, left: null, right: null }
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
}


TreeMethods.contains = function(value){
  //return a boolean value
}

TreeMethods.depthFirstLog = function(callback){
// execute the callback on each node
}


/*
 * Complexity: What is the time complexity of the above functions?
 */


      //               15
      //             /    \
      //           10      25
      //          /  \     /  \
      //        5     12  20   30

      //        ---------------
      //        15,  10,  5,  45, 8,  6  , 30, 18

      //                 15
      //              _______
      //                 15
      //              10
      //              _______
      //                 15
      //              10
      //            5
      //            ___________
      //                 15
      //              10    45
      //            5
      //            ___________
      //                 15
      //              10     45
      // 5 -8 -->   8               :note: 10 > 8 > 5, replace 5 w/ 8
      //          5
      //            ____________
      //                15
      //             10     30
      //           8   11 18  45
      // 5 -6 -> 6
      //       5






// IOCE: input only number

// output :
//     insert : will make a node, and asign the node

//      insert:
//         1). Check if a root has a value
//              - no value: root = value
//         2). If there is a root,
//              - check if the incoming value is less
//                    - if incoming value is less than root, check if there is a left node value
//                        - if there is no value on the left, assign the incoming value to left
//                        - if there is a value, compare the left with the incoming value.
//                              - if the incoming value is greater than the current left value, swap the two node
//                              - then you move the current left value down to the next left

//    contains: function to check if the incoming value is in the tree
//
//    depthFirstLog: function take a callback parameter and execute on every value in a tree


// Constrain

// Edge cages

