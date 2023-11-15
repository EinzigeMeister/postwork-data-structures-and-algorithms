function reverseString(str) {
  if (str.length === 0) return "";
  return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1));
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: ");
  console.log("=>", reverseString(""));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/*
Recursion:
base case: str.length == 0, return ''
return last char + reverse with string removing last character
*/
// And a written explanation of your solution
/*
I wanted to test a recursive method for this instead of looping backwords and adding the end character to 
  a different string
This will work as long as str has the property length (not null or undefined)
This could be problematic for large strings with memory usage since the string is stored str.length times
*/
