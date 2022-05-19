/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    let idx = Math.floor(nums.length / 2);
    let head = nums[idx];
    let left = sortedArrayHelper(nums, 0, idx);
    let right = sortedArrayHelper(nums, idx + 1, nums.length);

    return new TreeNode(head, left, right)
};

var sortedArrayHelper = function (nums, start, end) {
    if (start === end) {
        return null;
    }
    nums = nums.slice(start, end)
    let idx = Math.floor(nums.length / 2);
    let head = nums[idx];
    let left = sortedArrayHelper(nums, 0, idx)
    let right = sortedArrayHelper(nums, idx + 1, nums.length)

    return new TreeNode(head, left, right)
}
