let firstUniqChar = function (s) {
  let ls = s.toLowerCase();

  let idx = 0;

  let strObj = {};
  let strIdx = {};

  for (char of ls) {
    strObj[char] = (strObj[char] || 0) + 1;
    strIdx[char] = idx;

    idx++;
  }

  console.log(strObj);
  console.log(strIdx);

  for (key in strObj) {
    if (strObj[key] === 1) {
      return strIdx[key];
    }
  }

  return -1;
};

firstUniqChar('leetcode');
console.log(firstUniqChar('dddccdbba'));
