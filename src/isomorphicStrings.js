// https://leetcode.com/problems/isomorphic-strings/submissions/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMapT = {};
    let tMapS = {};
    
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in sMapT) && !(t[i] in tMapS)) {
            sMapT[s[i]] = t[i];
            tMapS[t[i]] = s[i];
        } else if (sMapT[s[i]] !== t[i] && tMapS[t[i]] !== s[i]) {
            return false;
        }        
    }
    
    return true;
};
