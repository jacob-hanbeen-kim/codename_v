/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const reverseString = function (s) {
    let len = s.length - 1;
    for(let i = 0; i <= len; i++) {
		s.push(s.splice(len - i, 1)[0]);
    }
	return s;
};