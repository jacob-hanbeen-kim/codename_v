
// Better
/**
 * Moore’s Voting Algorithm -- O(n) run time and O(1) space complexity
 * @param {number[]} nums
 * @return {number}
 */
export var majorityElement = function (nums) {
    let count = 0;
    let max = 0;
    nums.forEach((num) => {
        if (count === 0) max = num;

        if (max === num) count++;
        else count--;
    })

    return max;
};

// Naive
/**
 * Takes O(n) time and O(n) space complexity
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function (nums) {
    let map = {};
    let max = nums[0];
    nums.forEach((num) => {
        if (map[num]) map[num] += 1;
        else map[num] = 1;

        if (map[num] > map[max]) max = num;
    })

    return max;
};