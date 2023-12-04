const romanOneDigit = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanTwoDigits = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};
function romanNumeral(string) {
  numeral = 0;
  while (string.length > 1) {
    if (string.slice(0, 2) in romanTwoDigits) {
      numeral += romanTwoDigits[string.slice(0, 2)];
      string = string.slice(2);
    } else {
      numeral += romanOneDigit[string.charAt(0)];
      string = string.slice(1);
    }
  }
  if (string.length === 1) numeral += romanOneDigit[string[0]];
  return numeral;
}

if (require.main === module) {
  console.log("Expecting: 1");
  console.log(romanNumeral("I"));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral("IX"));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral("CDII"));

  console.log("");

  console.log("Expecting: 3999");
  console.log(romanNumeral("MMMCMXCIX"));

  console.log("");

  console.log("Expecting: 3479");
  console.log(romanNumeral("MMMCDLXXIX"));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// add dictionaries for two digit roman numerals and one digit roman numerals
// let numeral = 0
// loop: check if first two indexes are in two digit dict, if so, add to numeral and remove digits. Else, add and remove first digit. Stop when <2 digits remain
// if 1 digit remains, add it to numeral
// return numeral

// And a written explanation of your solution
// Since numbers only change when they're a 4 or a 9, checking the two digit dictionary first will eliminate those cases, leaving the only other option to add from the single digit array.
// Checking for multiples requires much more overhead code to achieve the same result, i.e. III = I + I + I, so limiting to max two characters will fit all cases.
// Checking for a remainder at the end prevents having to check the length at each loop.

// Time Complexity: O(n)
// Space Complexity: O(n)
