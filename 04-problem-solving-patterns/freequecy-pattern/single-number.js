/**
 
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

let singleNumber = function (nums) {
  let freqObj = {};

  for (num of nums) {
    freqObj[num] = (freqObj[num] || 0) + 1;
  }

  console.log(freqObj);

  for (key in freqObj) {
    if (freqObj[key] === 1) {
      return key;
    }
  }
};

singleNumber([2, 2, 1]);
console.log(singleNumber([2, 2, 1]));
