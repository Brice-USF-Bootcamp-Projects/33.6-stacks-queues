/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this.first = null; // Top of the stack
    this.last = null;  // Bottom of the stack
    this.size = 0;     // Tracks the number of nodes in the stack
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */
  push(val) {
    const newNode = new Node(val);
    if (!this.first) { // If the stack is empty
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first; // Point the new node to the current top
      this.first = newNode;      // Update the top of the stack
    }
    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (!this.first) { // If the stack is empty
      throw new Error("Stack is empty");
    }
    const poppedValue = this.first.val; // Get the value to return
    this.first = this.first.next;       // Move the top pointer
    this.size--;
    if (this.size === 0) { // If the stack becomes empty
      this.last = null;    // Update the bottom pointer
    }
    return poppedValue;
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    if (!this.first) { // If the stack is empty
      throw new Error("Stack is empty");
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false. */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
