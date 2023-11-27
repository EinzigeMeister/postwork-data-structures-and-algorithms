function recursiveSearch(arr, target) {
  // type your code here
  if (arr.length === 0) return false;
  if (arr.pop() === target) return true;
  return recursiveSearch(arr, target);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
/*
Base case(s): index in array is target, return true. array.length is 0, return false
Edge case(s): empty array sent initally
pop the last value of the array, check it to the target, and return the search of the remainder of the array
*/
// And a written explanation of your solution
/*
By using pop() to shorten the array, it establishes the base case of arr.length === 0 and can search each index individually.
This way, if the target isn't found and there are still more locations in the array, 
*/
