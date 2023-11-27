function findShortestStringRecursive(arr) {
  if (arr.length === 1) return arr[0];
  current = arr[0];
  remainder = findShortestStringRecursive(arr.slice(1));
  return current.length <= remainder.length ? current : remainder;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(["flower", "juniper", "lily", "dandelion"]));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
/*
base case: 1 item in the array, it is returned
store the first item of the array, then check the rema
return the smaller of the current (index 0) of the array to the remainder of the array (slice(1))
*/
// And a written explanation of your solution
/*
By slicing the array, it will ensure only 2 items are being checked at a time at the final iteration moving backwards.
Since the remainder is a higher index than the current position, current <= remainder will insure ties go to the lower indexes.
*/
