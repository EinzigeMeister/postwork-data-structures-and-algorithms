function findShortestString(arr) {
  // type your code here
  arr.sort((a, b) => a.length - b.length);
  return arr[0];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(["flower", "juniper", "lily", "dadelion"]));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
//sort the array using compare function
//     str1.length - str2.length
//return arr[0]
// And a written explanation of your solution
//Sorting the array using a custom compare function will push the shortest value to the beginning of the array
//a 0 value in the sort function allows the order to stay the same for similar lengths
