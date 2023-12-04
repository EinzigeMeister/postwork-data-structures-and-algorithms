function consecutiveSubstrings(string) {
  substrings = new Set();
  solution = [];
  for (let i = 0; i < string.length; i++) {
    currentSub = "";
    for (let j = i; j < string.length; j++) {
      currentSub += string[j];
      substrings.add(currentSub);
    }
  }
  return [...substrings];
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

  console.log("Expecting: [' ', ' a', ' a ', 'a', 'a ']");
  console.log("=>", consecutiveSubstrings(" a "));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// iterate through array from 0 to end, and again from the outer loop to end, and add each character to a substring and the substring to the set.
// reset the substring every outer iteration
// convert the set to a list and return it

// And a written explanation of your
// performing it this way preserves the order since sets are ordered by when a value is added to it.
// using a set prevents duplicates and ensures the first occurance displays first in the solution.
// after viewing the solution, it appears duplicates are allowed, and I could just push everything to an array and not use the set.
