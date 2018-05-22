var assert = require('assert');
var {Stack, Node} = require('../src/linked_list_stack');

describe('linked list stack', function() {
  describe('node', function() {
    it('initializes a node', function() {
      var node = new Node();

      node.value = 2;

      assert.equal(node.value, 2);
      assert.equal(node.next, null);
    });
  });

  describe('stack', function() {
    it('initializes a stack', function() {
      let stack = new Stack();

      assert.equal(stack.head, null);
      assert.equal(stack.size, 0);
    });

    it('pushes an item to the stack', function() {
      let st = new Stack();

      st.push(3);

      assert.equal(st.size, 1);
      assert.equal(st.head.value, 3);
    });

    describe('pop', function() {
      it('pops the last item from the stack', function() {
        let st = new Stack();

        st.push(3);
        st.push(2);

        assert.equal(st.size, 2);

        let x = st.pop();

        assert.equal(x, 2);
      });

      it('throws error if stack is empty', function() {
        let st = new Stack();

        try {
          st.pop();
        } catch (err) {
          assert.equal(err.message,'Stack is empty');
        }
      });
    });

  });
});
