/**

    Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

*/

// naive approach
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (i = 0; i < arr1.length; i++) {
//     const correctIndex = arr2.indexOf(arr1[i] ** 2);

//     if (correctIndex === -1) return false;

//     arr2.splice(correctIndex, 1);
//   }

//   return true;
// }

// frequency approach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyObj1 = {};
  let frequencyObj2 = {};

  for (num of arr1) {
    frequencyObj1[num] = (frequencyObj1[num] || 0) + 1;
  }

  for (num of arr2) {
    frequencyObj2[num] = (frequencyObj2[num] || 0) + 1;
  }

  for (key in frequencyObj1) {
    let squardKey = key ** 2;

    if (!(squardKey in frequencyObj2)) return false;

    if (frequencyObj1[key] !== frequencyObj2[squardKey]) return false;
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));

function anagrams(string1, string2) {
  let str1 = string1.toLowerCase();
  let str2 = string2.toLowerCase();

  if (str1.length !== str2.length) return false;

  let strObj1 = {};
  let strObj2 = {};

  for (char of str1) {
    strObj1[char] = (strObj1[char] || 0) + 1;
  }

  for (char of str2) {
    strObj2[char] = (strObj2[char] || 0) + 1;
  }

  for (key in strObj1) {
    if (!(key in strObj2)) return false;

    if (strObj1[key] !== strObj2[key]) return false;
  }

  return true;
}

console.log(anagrams('listen', 'silent'));
