function balancingParentheses(string) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < string.length; i++) {
    checkChar = string.charAt(i);
    if (checkChar === "(") left++;
    if (checkChar === ")") {
      if (left > 0) left--;
      else right++;
    }
  }
  return left + right;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses("(()())"));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses("()))"));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(")"));

  console.log("");

  console.log("Expecting: 4");
  console.log(balancingParentheses("))(("));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
/*
loop through each character of the string
left:and count left parenthesis as +1
right: if left is 0, add 1 to right, else subtract 1 from left
return left + right

*/
// And a written explanation of your solution
/*
By going left to right, and counting "extra" left parenthesis, you can see if extras are needed as right parenthesis appear.
As right parenthesis appear, you subtract from the left count, and if there are no "extras" you will have an unmatched right parenthesis, so add it to the right count.
At the end, return the right count with the remaining left count to get the total required.
*/
