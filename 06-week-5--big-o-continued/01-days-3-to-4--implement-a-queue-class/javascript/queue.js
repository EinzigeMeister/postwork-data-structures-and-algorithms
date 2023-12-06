class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  // if full throw error
  enqueue(item) {
    if (this.isFull()) throw Error("The queue is full.");
    this.queue.push(item);
  }

  // remove item from front of queue and return it
  dequeue() {
    return this.queue.shift();
  }

  // return item at front of queue without removing it
  peek() {
    return this.queue[0];
  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    return this.size() === 0;
  }

  // return true if queue is full, otherwise false
  isFull() {
    return this.size() === this.limit;
  }

  // return number of items in queue
  size() {
    return this.queue.length;
  }

  // return -1 if item not in queue, otherwise integer representing
  // how far it is from the front
  search(target) {
    return this.queue.indexOf(target);
  }

  // print contents of queue: do not return the queue itself!
  print() {
    console.log(this.queue);
  }
}

if (require.main === module) {
  const queue = new Queue();
  console.log("queue is empty: ", queue.isEmpty());
  console.log("queue is full", queue.isFull());
  console.log("Expecting undefined for deque() on empty queue", queue.dequeue());
  console.log("Expecting undefined for peek() on an empty queue.", queue.peek());
  console.log("Expecting -1 for search on empty queue", queue.search(undefined));

  console.log("Adding 10 items to the queue");
  for (let i = 0; i < 10; i++) queue.enqueue(i);
  console.log("expecting queue full error");
  try {
    queue.enqueue("Too much");
  } catch (error) {
    console.log(error.message);
  }

  queue.print();
  console.log("queue is empty: ", queue.isEmpty());
  console.log("queue is full", queue.isFull());
  console.log("Expecting 0 for peek()", queue.peek());
  console.log("Expecting 0 for pop()", queue.dequeue());
  console.log("Expecting 7 for search(8)", queue.search(8));
  console.log("Expecting 8 for search(9)", queue.search(9));
  console.log("Expecting -1 for search(0)", queue.search(0));
  console.log("queue is empty: ", queue.isEmpty());
  console.log("queue is full", queue.isFull());
  queue.print();
}

module.exports = Queue;
