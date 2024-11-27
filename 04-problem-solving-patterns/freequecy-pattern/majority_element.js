let majorityElement = function (nums) {
  let numsObj = {};

  for (num of nums) {
    numsObj[num] = (numsObj[num] || 0) + 1;
  }

  let hck = numsObj[String(nums[0])];

  let res = String(nums[0]);

  for (key in numsObj) {
    if (numsObj[key] > hck) {
      hck = numsObj[key];

      res = key;
    }
  }

  return res;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3]));
