// Instantiate a new graph
var Graph = function() {
    // define properties of graph:
    this.storage = [];
    this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.storage.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    // let flag = false;
    
    // this.storage.forEach(el => {
    //     if (el === node) {
    //         flag = true;
    //     }
    // });

    // return flag;
    return this.storage.includes(node);
}

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    this.storage.pop();
    this.edge.pop();
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    let flag = false;
    for (let i = 0; i < this.edge.length; i++) {
        if (this.edge.includes(fromNode) && this.edge.includes(toNode)){
            flag = true;
        }
    }
    return flag;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.edge.push(fromNode);
    this.edge.push(toNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    this.edge.pop();
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for (let i = 0; i < this.storage.length; i++) {
        cb(this.storage[i]);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


