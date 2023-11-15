function fibonacci(num) {
  // type your code here
  const fibArr = [0, 1];
  for (let i = 2; i <= num; i++) fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  return fibArr[num];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");
  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");
  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");
  console.log("Expecting: 55");
  console.log("=>", fibonacci(1000));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/*
assign array with base cases (index 0=0, 1=1)
loop from 2 to n and add to array
return array[n]
*/
// And a written explanation of your solution
/*
this method elimates recursion for large values of n, and checks the previous 2 (already created) values
*/
