function isPalindrome(str) {
  let arr = str.split('');

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('madam')); // Output: true
console.log(isPalindrome('hello')); // Output: false
console.log(isPalindrome('abba')); // Output: true
