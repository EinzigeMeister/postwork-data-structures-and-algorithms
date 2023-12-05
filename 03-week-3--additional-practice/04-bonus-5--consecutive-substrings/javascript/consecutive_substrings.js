function consecutiveSubstrings(string) {
  solution = [];
  for (let i = 0; i < string.length; i++) {
    currentSub = "";
    for (let j = i; j < string.length; j++) {
      currentSub += string[j];
      solution.push(currentSub);
    }
  }
  return solution;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(""));

  console.log("");

  console.log("Expecting: [' ', ' a', 'a']");
  console.log("=>", consecutiveSubstrings(" a"));

  console.log("");

  console.log("Expecting: [' ', ' a', ' a ', 'a', 'a ', ' ']");
  console.log("=>", consecutiveSubstrings(" a "));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// iterate through array from 0 to end, and again from the outer loop to end, and add each character to a substring and the substring to a list.
// reset the substring every outer loop
// return the list

// And a written explanation
// by using a substring starting from an index and building outward, then repeating through the string it ensures the order is maintained,
// and every possible consecutive substring is captured
