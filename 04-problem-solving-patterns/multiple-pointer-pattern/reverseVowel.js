let reverseVowels = function (s) {
  let arr = s.split('');

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (isVowel)
      if (isVowel(arr[left]) && isVowel(arr[right])) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
      } else if (isVowel(arr[left]) && !isVowel(arr[right])) {
        right--;
      } else if (!isVowel(arr[left]) && isVowel(arr[right])) {
        left++;
      } else {
        left++;
        right--;
      }
  }

  return arr.join('');
};

console.log(reverseVowels('IceCreAm'));

function isVowel(char) {
  let ch = char.toLowerCase();
  switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
      break;
    default:
      return false;
  }
}

/**
 Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"
 */
