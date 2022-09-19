/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const runningSum = function (nums) {
    let current = 0;

    for(let i = 0;i<nums.length; i++){
        current = current + nums[i]
        nums[i] = current
    }

    return nums;
};
