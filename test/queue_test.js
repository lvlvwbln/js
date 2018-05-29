var assert = require('assert');
var { Queue } = require('../src/queue');

describe('queue', function() {
    it('initializes', function() {
        let q = new Queue();
        assert.deepEqual(q.list, []);
    });

    it('enqueues an item', function() {
        let q = new Queue();
        q.queue(2)
        assert.deepEqual(q.list, [2]);
    });

    it('dequeues an item', function() {
        let q = new Queue();
        q.queue(2)
        q.queue(3)
        q.dequeue()
        assert.deepEqual(q.list,[2]);
    });
});
