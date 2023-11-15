function selectionSort(arr) {
  // type your code here
  for (let position = 0; position < arr.length; position++) {
    let min = arr[position];
    let minIndex = position;
    for (let index = position + 1; index < arr.length; index++) {
      if (arr[index] < min) {
        min = arr[index];
        minIndex = index;
      }
    }
    temp = arr[position];
    arr[position] = min;
    arr[minIndex] = temp;
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
