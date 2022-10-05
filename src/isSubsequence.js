// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (t.length >= s.length) {
        let i = 0;
        let j = 0;
        
        while (i < t.length && j < s.length) {
            if (t[i] === s[j]) {
                j++;
            }
            i++;
        }
        
        if (j === s.length) {
            return true;
        }
    }
    
    return false;
};
