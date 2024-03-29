var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {head:0, tail:0, storage:{}};
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {

  enqueue : function(value){
    this.storage[this.tail] = value;
    this.tail++;
  },

  dequeue : function(){
    if (this.tail - this.head > 0) {
      var result = this.storage[this.head];
      this.head++;
    }
    return result;
  },

  size : function(){
    return this.tail - this.head;
  }

};



