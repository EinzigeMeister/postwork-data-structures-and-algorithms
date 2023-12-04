function distinctPairSum(arr, k) {
  const pairs = new Set();
  const solution = [];
  for (let i = 0; i < arr.length - 1; i++) if (arr[i] + arr[i + 1] === k) pairs.add(arr[i] < arr[i + 1] ? arr[i] : arr[i + 1]);
  pairs.forEach((value) => solution.push([value, k - value]));

  return solution;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [0, 2]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 2], 10));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", distinctPairSum([], 10));

  console.log("");

  console.log("Expecting: [[0, 10], [1, 9], [2, 8], [3, 7], [4, 6], [5, 5]");
  console.log("=>", distinctPairSum([10, 0, 9, 1, 8, 2, 7, 3, 6, 4, 5, 5, 5, 4, 6, 3, 7, 2, 8, 1, 9, 0, 10], 10));

  console.log("");

  console.log("Expecting: [[0, 0], [10, -10], [3, -3]]");
  console.log(distinctPairSum([1, 0, 0, 10, -10, 5, 4, 3, -3, -3], 0));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// establish a set = () and solution = []
// loop through array from 0 to length - 1
//    add the LOWER value of the pair to the set
// loop through set
//      push [value, k-value] to solution
// return solution
//
// And a written explanation of your solution
// Since the order of the digits doesn't matter, using a set with the minimum of the two values eliminates duplicates
// and you only need to store one value since the other will always be a the difference between the value and k
