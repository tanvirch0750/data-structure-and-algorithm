/**
 
Problem: Maximum Sum of a Subarray of Fixed Size
Find the maximum sum of any k consecutive elements in the array.

Input:
Array: [2, 1, 5, 1, 3, 2], k = 3

Output:
Maximum sum = 9 (from subarray [5, 1, 3]).


 */

function maxSubArraySum(nums, k) {
  if (k > nums.length) return null;

  let maxSum = 0;
  let currentSum = 0;

  for (i = 0; i < k; i++) {
    maxSum = maxSum + nums[i];
  }

  currentSum = maxSum;

  for (i = k; i < nums.length; i++) {
    currentSum = currentSum - nums[i - k] + nums[i];

    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

maxSubArraySum([2, 1, 5, 1, 3, 2], 3);

console.log(maxSubArraySum([2, 1, 5, 1, 3, 2], 3));
