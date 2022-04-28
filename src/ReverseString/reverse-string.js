/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const reverseString = function (s) {
    return s.split("").reverse().join("");
};


console.log(reverseString('hello'))