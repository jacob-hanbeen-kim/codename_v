/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const reverseString = function (s) {
    let output = [];
    
    for(let i = 0; i < s.length; i++) {
        output[i] = s[s.length -1 -i]
    }
    
    for(let i = 0; i < s.length; i++) {
        s[i] = output[i]
    }
    
    return s
};