let countSteps = 0;
function fibonacci(n, resetSteps = true) {
  if (resetSteps) countSteps = 0;
  // type your code here
  if (n < 1) return 0;
  if (n <= 2) return 1;
  countSteps++;
  return fibonacci(n - 1, false) + fibonacci(n - 2, false);
}

function f(n, memo = null) {
  if (memo == null) {
    memo = [0, 1, 1];
    countSteps = 0;
  }
  if (memo[n] != undefined) return memo[n];
  countSteps++;
  memo[n] = f(n - 1, memo) + f(n - 2, memo);
  return memo[n];
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));
  console.log("new recrusions: " + countSteps);

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));
  console.log("new recrusions: " + countSteps);

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
  console.log("new recrusions: " + countSteps);

  //Efficient(er)
  console.log("Expecting: 0");
  console.log("=>", f(0));
  console.log("new recrusions: " + countSteps);

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", f(2));
  console.log("new recrusions: " + countSteps);

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", f(10));
  console.log("new recrusions: " + countSteps);

  console.log("");

  console.log("Expecting: 218922995834555169026");
  console.log("=>        ", f(99));
  console.log("new recrusions: " + countSteps);
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/*
Base cases: n===0 return 0, n===1, return 1, n===2, return 1
return fib(n-1)+fib(n-2)
*/

// And a written explanation of your solution
/*
recursion will calculate the value of f(n) = f(n-1) + f(n-2) top down. runtime is 2^n. Memo f(N) = O(N)
*/
