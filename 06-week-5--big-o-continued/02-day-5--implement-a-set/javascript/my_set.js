class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    this.data = {};
    if (Array.isArray(iterable) || typeof iterable === "string") {
      for (const item of iterable) this.add(item);
    } else if (iterable != undefined) throw Error("Invalid set initialization");
  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length;
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true;
    return this;
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.has(item)) {
      delete this.data[item];
      return true;
    }
    return false;
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    return Object.hasOwn(this.data, item);
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data);
  }
}

if (require.main === module) {
  console.log("Attempting initialization of a number");
  try {
    const mySet = new MySet(9);
  } catch (error) {
    console.log(error.message);
  }
  console.log("Creating new sets, printing entries");
  const realSet = new MySet([8, 6, 7, 5, 3, 0, 0, 9]);
  const emptySet = new MySet();
  const arraySet = new MySet([[3, 2], "butter", null, undefined]);
  const stringSet = new MySet("the quick brown fox jumps over the lazy dog");
  console.log(realSet.entries());
  console.log(emptySet.entries());
  console.log(arraySet.entries());
  console.log(stringSet.entries());

  console.log("Testing function on realSet");
  console.log("Set size: ", realSet.size());
  console.log("Set 'has' 3: ", realSet.has(3));
  console.log("Set 'has' 19: ", realSet.has(19));
  console.log("Removing 3, expect true", realSet.delete(3));
  console.log("Removing 3, expect false", realSet.delete(3));
  console.log("Set 'has' 3", realSet.has(3));
  console.log("Set size: ", realSet.size());
}

module.exports = MySet;
