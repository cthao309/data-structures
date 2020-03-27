var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create the new node
    let newTail = Node(value);

    // case 1: if there hasn't been a list created
    if(!list.head) {
      // assign list.head to new node
      list.head = newTail;
      list.tail = list.head;
    } else {
      // assign list.tail.next to new node
      list.tail.next = newTail;
    }

    // assign list.tail to new node
    list.tail = newTail;
  };

  list.removeHead = function() {
    // case 1: check if the list exist
    if(list.head === null) {
      // if it doesn't exist, return null
      return null;
    }

    // get the head node
    let currentHead = list.head;

    // assign the new head to be the next node
    list.head = list.head.next;

    // return the value of the removed head
    return currentHead.value;
  };

  list.contains = function(target) {
    // get the head node
    let node = list.head;

    // loop through the node
    while(node) {
      // case 1: if the node value is equal to the target value
      if(node.value === target) {
        // return true
        return true;
      }

      // look to the next node
      node = node.next;
    }

    // if the loop false to return, then we have search through the whole list and return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 Time: O(n);
 Space: O(n);
 */
