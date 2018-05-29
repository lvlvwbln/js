let Queue = function() {
    this.list = [];
};

Queue.prototype.queue = function(value){
    this.list.push(value);
};

Queue.prototype.dequeue = function() {
    this.list.pop();
};

module.exports = {
    Queue: Queue
};
