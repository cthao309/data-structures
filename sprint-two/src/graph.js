

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
  let isValidNode = (node in this.nodes);

  if(isValidNode) {
    // search through the edges and remove the edge
    for(let key in this.nodes[node].edges) {
      if(key === node) {
        delete this.nodes.node['edges'].node;
      }
    }

    // remove from the container
    delete this.nodes[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check to see if there exist such a node to create the edge with
  let isValidNodeToNode = (toNode in this.nodes);

  // if there there such a node
  if(isValidNodeToNode) {
    // does it has an edges that contains the toNode?
    let isValidEdge = (fromNode in this.nodes[toNode]['edges']);

    return isValidEdge ? true : false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check to see if there exist a toNode before creating the edge
  let isValidNode = (toNode in this.nodes);

  // if the toNode exist
  if(isValidNode) {
    this.nodes[toNode]['edges'][fromNode] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // check to see if the fromNode exist
  let isValidNodes = (toNode in this.nodes) || (fromNode in this.nodes);

  if(isValidNodes) {
    delete this.nodes.toNode['edges'].fromNode;
    delete this.nodes.fromNode['edges'].toNode;
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
 Space: O(n)
 */


