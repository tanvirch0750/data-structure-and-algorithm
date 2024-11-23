function charCount(str) {
  let lcStr = str.toLowerCase();

  let result = {};

  for (char of lcStr) {
    if (isAlphanumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

console.log('char count', charCount('hello world 1234 !%'));

function isAlphanumeric(char) {
  const code = char.charCodeAt(0);

  // Check if the character is a letter (a-z, A-Z) or a digit (0-9)
  if (
    !(code >= 48 && code <= 57) && // Digits (0-9)
    !(code >= 65 && code <= 90) && // Uppercase letters (A-Z)
    !(code >= 97 && code <= 122) // Lowercase letters (a-z)
  ) {
    return false; // If any character is not alphanumeric, return false
  }
  return true; // All characters are alphanumeric
}
