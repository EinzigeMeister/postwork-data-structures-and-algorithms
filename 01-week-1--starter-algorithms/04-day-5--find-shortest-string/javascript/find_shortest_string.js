function findShortestString(arr) {
  arr.sort((a, b) => a.length - b.length);
  return arr[0];
}

function findShortestStringEfficient(arr) {
  let shortest = arr[0];
  for (item of arr) if (item.length < shortest.length) shortest = item;
  return shortest;

  //solution using reduce()
  /*
  return arr.reduce((shortest, string) => 
    string.length < shortest.length ? string : shortest);
  */
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(["flower", "juniper", "lily", "dadelion"]));

  console.log("");

  console.log("Testing Efficient method");
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringEfficient(["aaa", "a", "bb", "ccc"]));

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringEfficient(["cat", "hi", "dog", "an"]));

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringEfficient(["flower", "juniper", "lily", "dadelion"]));
  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
//sort the array using compare function
//     str1.length - str2.length
//return arr[0]

//Efficient method:
//set arr[0] as shortest
//for item of arr: if item.length < arr.length, shortest = item
//return shortest

// And a written explanation of your solution
//Sorting the array using a custom compare function will push the shortest value to the beginning of the array
//a 0 value in the sort function allows the order to stay the same for similar lengths

//Efficient method:
//Since for/of loops start at index 0 and the index isn't used for the return value, it's cleaner than using a for/in or traditional for loop.
//Establishing

//Runtime: O(nlog(n))
//Space: n

//Runtime of O(n)  performed by establishing the shortest as the first item, then checking each subsequent item's length and replacing when a shorter item is found.
