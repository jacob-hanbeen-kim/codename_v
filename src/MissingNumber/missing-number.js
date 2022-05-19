/**
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sum = (nums.length / 2) * (1 + nums.length);
    nums.forEach((num) => {
        sum -= num;
    })
    return sum;
};