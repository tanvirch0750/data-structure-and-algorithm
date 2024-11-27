var topKFrequent = function (nums, k) {
  let numsObj = {};

  for (num of nums) {
    numsObj[num] = (numsObj[num] || 0) + 1;
  }

  console.log(numsObj);
};

topKFrequent([3, 1, 1, 1, 2, 2, 4, 4, 4, 4, 4]);
