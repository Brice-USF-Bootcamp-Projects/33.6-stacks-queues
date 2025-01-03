/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val; // Stores the value of the node
    this.next = null; // Points to the next node in the queue
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
class Queue {
  constructor() {
    this.first = null; // Points to the first node in the queue
    this.last = null;  // Points to the last node in the queue
    this.size = 0;     // Tracks the number of nodes in the queue
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.last) { // If the queue is empty
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; // Link the new node at the end
      this.last = newNode;      // Update the last pointer
    }
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    if (!this.first) { // If the queue is empty
      throw new Error("Queue is empty");
    }
    const dequeuedValue = this.first.val; // Get the value to return
    this.first = this.first.next;         // Move the first pointer
    this.size--;
    if (this.size === 0) { // If the queue becomes empty
      this.last = null;    // Update the last pointer
    }
    return dequeuedValue;
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    if (!this.first) { // If the queue is empty
      throw new Error("Queue is empty");
    }
    return this.first.val; // Return the value at the front
  }

  /** isEmpty(): return true if the queue is empty, otherwise false. */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;

