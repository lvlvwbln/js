let Node = function () {
  this.value = null;
  this.next = null;
}

let Stack = function(firstNode) {
  this.head = null;
  this.size = 0;
}

Stack.prototype.push = function(value) {
  nd = new Node();
  nd.value = value;
  nd.next = this.head;
  this.head = nd;
  this.size++;
}

Stack.prototype.pop = function() {
  if (this.head == null)
    throw new Error('Stack is empty');
  let popped = this.head.value;
  this.head = this.head.next;
  this.size--;
  return popped;
}

module.exports = {
  Node: Node,
  Stack: Stack
};
