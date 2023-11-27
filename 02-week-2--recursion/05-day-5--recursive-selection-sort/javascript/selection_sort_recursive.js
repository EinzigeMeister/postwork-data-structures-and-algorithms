function selectionSortRecursive(arr) {
  if (arr.length === 0) return [];
  const min = Math.min(...arr);
  const idx = arr.indexOf(min);
  arr.splice(idx, 1);
  const remainder = selectionSortRecursive(arr);
  remainder.unshift(min);
  return remainder;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
/*
base case: empty array => return []
find minimum value and store it
remove that index from the array
set a variable to the resursion of the remainder array
push the minimum value to the beginning of the array
return the array
*/
// And a written explanation of your solution
/*
This function will recursively break down an array until it is empty, then rebuild the "remainder" by putting each value to the beginning of the array. 
This will start with the highest number that would be found in the 2nd to last iteration, followed by each subsequent smaller number.
*/
