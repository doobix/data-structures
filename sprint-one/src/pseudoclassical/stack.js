var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.totalSize = 0;
  this.storage = {};
};
Stack.prototype.size = function() {
  return this.totalSize;
}
Stack.prototype.push = function(value) {
  this.storage[this.totalSize] = value;
  this.totalSize++;
}
Stack.prototype.pop = function() {
  if (this.totalSize > 0) {
    this.totalSize--;
  }
  var result = this.storage[this.totalSize];
  delete this.storage[this.totalSize];
  return result;
}
