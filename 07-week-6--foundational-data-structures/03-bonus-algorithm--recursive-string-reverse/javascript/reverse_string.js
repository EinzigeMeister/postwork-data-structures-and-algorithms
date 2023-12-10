function reverseString(str) {
  if (str.length === 0) return "";
  return reverseString(str.slice(1)) + str[0];
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// if str.length === 0 return ""
// return reverseString(str.slice(1)) + str[0]
// And a written explanation of your solution
// the base case for this scenario is an empty string, by recursively calling the function with the remainder of the string and then adding the first character, it will
// build the string in reverse due to returning the last iteration first.
