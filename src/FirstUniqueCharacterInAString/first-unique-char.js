/**
 *  Complexity:
    Time complexity : O(n).
    Space complexity : O(n).
 * @param {number[]} nums
 * @return {boolean}
 */
export const firstUniqChar = function(s) {
    let map = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) map[s[i]] = {ind:i, c:0};
        map[s[i]].c++;
    }

    for (let i in map) {
        if(map[i].c == 1) {
            return map[i].ind
        }
    }

    return -1;
};