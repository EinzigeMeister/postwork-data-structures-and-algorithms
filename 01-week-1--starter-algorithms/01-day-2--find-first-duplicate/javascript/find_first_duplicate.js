function findFirstDuplicate(arr) {
  // type your code here
  if (arr.length < 2) return -1;
  for (let i = 1; i < arr.length; i++) if (arr[i - 1] === arr[i]) return arr[i];
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1]));

  console.log("");

  console.log("Expecting: 'w#8cdhj3'");
  console.log("=>", findFirstDuplicate([1, "w#8cdhj3", "w#8cdhj3", 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/*
base case: arr.length < 2: return -1
loop through array starting at index 1, checking previous index for equality
return value if found
return -1 after loop (not found)
*/
// And a written explanation of your solution
// There can't be duplicates for an array with fewer than 2 values
// Searching left to right starting at position 1 allows for the standard for loop structure and will find the
//  first occurance of a duplicate
// If it goes through the entire array and doesn't find a duplicate, it will return -1
