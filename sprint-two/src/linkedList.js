var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var tempNode = makeNode(value);
    if (list.head === null) {
      list.head = tempNode;
    }
    if (list.tail !== null) {
      list.tail.next = tempNode;
    }
    list.tail = tempNode;
  };

  list.removeHead = function(){
    var tempHead = list.head.value;
    list.head = list.head.next;
    return tempHead;
  };

  list.contains = function(target){
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      if (current.next === null) {
        break;
      } else {
        // current.next = current.next.next;
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
