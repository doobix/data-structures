var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.head = 0;
  newQueue.tail = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
  size : function() {
    return this.tail - this.head;
  },
  enqueue : function(value){
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue : function() {
    if (this.tail - this.head > 0) {
      var temp = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return temp;
    }
  }
};


