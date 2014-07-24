var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {totalSize:0, storage:{}};
  _.extend(obj, stackMethods);

  return obj;
};

var stackMethods = {
  push: function(value){
    this.storage[this.totalSize] = value;
    this.totalSize++;
  },
  pop: function(){
    if (this.totalSize > 0) {
      this.totalSize--;
    }
    var temp = this.storage[this.totalSize];
    delete this.storage[this.totalSize];
    return temp;
  },
  size: function(){
    return this.totalSize;
  }
};


