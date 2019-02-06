// Write a function which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback .
// Otherwise it returns false.

function someRecursive(arr, callBack) {
  if (arr.length === 0) return false
  if (callBack(arr[0])) return true
  return someRecursive(arr.slice(1), callBack)
}

// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

module.exports = someRecursive
