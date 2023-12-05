class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if (this.isFull()) throw Error("The stack is full.");
    this.stack.push(item);
  }

  // remove item from top of stack and return it
  pop() {
    return this.stack.pop();
  }

  // return item at top of stack without removing it
  peek() {
    return this.stack[this.size() - 1];
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    return this.size() === 0;
  }

  // return true if stack is full, otherwise false
  isFull() {
    return this.size() === this.limit;
  }

  // return number of items in stack
  size() {
    return this.stack.length;
  }

  // return -1 if item not in stack, otherwise integer representing
  // how far it is from the top
  search(target) {
    const idx = this.stack.indexOf(target);
    return idx === -1 ? -1 : this.size() - idx - 1;
  }

  // print contents of stack: do not return the stack itself!
  print() {
    let printStr = "Top ";
    for (let i = this.size(); i > 0; i--) printStr += this.stack[i - 1] + " ";
    console.log(printStr + "Bottom");
  }
}

if (require.main === module) {
  // add your own tests in here
  const stacky = new Stack();

  console.log("Stack is empty: ", stacky.isEmpty());
  console.log("Stack is full", stacky.isFull());
  console.log("Expecting undefined for pop() on empty stack", stacky.pop());
  console.log("Expecting undefined for peek() on an empty stack.", stacky.peek());
  console.log("Expecting -1 for search on empty stack", stacky.search(undefined));

  console.log("Adding 10 items to the stack");
  for (let i = 0; i < 10; i++) stacky.push(i);
  console.log("expecting stack full error");
  try {
    stacky.push("Too much");
  } catch (error) {
    console.log(error.message);
  }

  stacky.print();
  console.log("Stack is empty: ", stacky.isEmpty());
  console.log("Stack is full", stacky.isFull());
  console.log("Expecting 9 for peek()", stacky.peek());
  console.log("Expecting 9 for pop()", stacky.pop());
  console.log("Expecting 0 for search(8)", stacky.search(8));
  console.log("Expecting 8 for search(0)", stacky.search(0));
  console.log("Expecting -1 for search(9)", stacky.search(9));
  console.log("Stack is empty: ", stacky.isEmpty());
  console.log("Stack is full", stacky.isFull());
  stacky.print();
}

module.exports = Stack;
