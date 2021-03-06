// Find the kth largest element in an unsorted array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
    nums.sort((a, b) => {
        return b - a;
      });

      return nums[k - 1];
};

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
