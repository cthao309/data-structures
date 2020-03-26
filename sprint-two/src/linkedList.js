var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newTail = Node(value);

    // case 1: if there hasn't been a list created
    if(!list.head) {
      list.head = newTail;
    } else {
      list.tail.next = newTail;
    }

    list.tail = newTail;
  };

  list.removeHead = function() {
    if(list.head === null) {
      return null;
    }

    let currentHead = list.head;
    list.head = list.head.next;

    return currentHead.value;
  };

  list.contains = function(target) {
    let node = list.head;

    while(node) {
      if(node.value === target) {
        return true;
      }

      node = node.next;
    }

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
