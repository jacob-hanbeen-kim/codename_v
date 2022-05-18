/**
 *  Complexity:
    Time complexity : O(n).
    Space complexity : O(n).
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 0;
            map[nums[i]]++;
        } else {
            return true;
        }
        
    }
    return false;
};