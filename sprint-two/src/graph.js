

// Instantiate a new graph
var Graph = function() {
  // create container
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // add the incoming node as node and set an "edges" object property on the node

  // this.nodes = { 1: {edges: {}}}
  this.nodes[node] = { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // check to see if there exist a node in the container
  return (node in this.nodes);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // check to see if there exist such a node, if there is then set the node to a new variable to be return
  let isValidNode = this.contains(node);

  if(isValidNode) {
    // remove from the container
    delete this.nodes[node];

    // loop the edges

    //     3 => {}
    //   /   \
    // 2   -   1

   for(let key in this.nodes) {
     let edgesContainer = this.nodes[key]['edges'];

     if(this.contains(edgesContainer[node])) {
       delete edgesContainer[node];
     }

     this.nodes[key]['edges'] = edgesContainer;
   }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check to see if there exist such a node to create the edge with
  let isValidNodes = this.contains(fromNode) && this.contains(toNode);

  // if there there such a node
  if(isValidNodes) {
    // does it has an edges that contains the toNode?
    let isValidEdges = (fromNode in this.nodes[toNode]['edges']) && (toNode in this.nodes[fromNode]['edges']);

    return isValidEdges;
  }

  return;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check to see if there exist a toNode before creating the edge
  let isValidNodes = this.contains(fromNode) && this.contains(toNode);

  // if the toNode exist
  if(isValidNodes) {
    this.nodes[toNode]['edges'][fromNode] = null;
    this.nodes[fromNode]['edges'][toNode] = null;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // check to see if the fromNode exist
  let isValidNodes = this.contains(fromNode) && this.contains(toNode);

  // if the fromNode exist
  if(isValidNodes) {
    delete this.nodes[fromNode]['edges'][toNode];
    delete this.nodes[toNode]['edges'][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(let key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

 Time: O(1)
 Space: O(1)
 */


