function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 7)); // Output: 3
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 4)); // Output: -1
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13], 13)); // Output: -1
