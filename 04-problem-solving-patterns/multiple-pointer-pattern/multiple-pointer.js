/**
 

Let’s say you have this array: [1, 2, 3, 4, 5, 6]

Problem:
Find two numbers that add up to 8.

Here’s the code to solve it using Multiple Pointers:

 */

function sumPair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

console.log(sumPair([1, 2, 3, 4, 5, 6], 8));
