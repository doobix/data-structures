var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.size = 0;
  this.storage = {};
};
Stack.prototype.size = function() {
  return this.size;
}
