function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 0));

  console.log("");

  console.log("Expecting: [1]");
  console.log("=>", rotateArray([1], 3));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", rotateArray([], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// mod k to arr length
// return arr[-k:] + arr[:-k] using javascript for the slicing & recombining

// And a written explanation of your solution
// you can only shift the array up to array.length times before it repeats, so modding k eliminates extra cycles.
// slicing and concating @ the modded k will push the values to the beginning of the array, maintaining the same order
