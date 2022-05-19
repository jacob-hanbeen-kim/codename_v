/**
 * Better Approach
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b) // O(nlogn)
    nums2.sort((a, b) => a - b) // O(nlogn)

    let intersect = []
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            intersect.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            i++;
        }
    }

    return intersect;
};





/**
 * Naive Approach
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let match = []
    let matchJ = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (!match.includes(i) && !matchJ.includes(j) && nums1[i] === nums2[j]) {
                match.push(i);
                matchJ.push(j);
                break;
            }
        }
    }

    let result = []
    match.forEach((idx) => {
        result.push(nums1[idx]);
    })

    return result;
};