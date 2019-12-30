var Set = function() {
  var set = Object.create(setPrototype);
  // set._storage = null; // fix me
  set.storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  // let flag = false;

  // this.storage.forEach(el => {
  //   if (item === el) {
  //     flag = true;
  //   } 
  // });

  // return flag;
  return this.storage.includes(item);
};

setPrototype.remove = function(item) {
  this.storage.shift();
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
