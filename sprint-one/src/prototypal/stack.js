var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.totalSize = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {
  size : function() {
    return this.totalSize;
  },
  push : function(value) {
    this.storage[this.totalSize] = value;
    this.totalSize++;
  },
  pop : function() {
    if (this.totalSize > 0) {
      this.totalSize--;
    }
    var result = this.storage[this.totalSize];
    delete this.storage[this.totalSize];
    return result;
  }
};
