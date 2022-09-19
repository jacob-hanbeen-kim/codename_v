/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const pivotIndex = function (nums) {
    let total = 0;
    
    for(let i = 0;i<nums.length; i++){
        total =total+ nums[i]
    }

    let curSum =0;

    for(let i = 0;i<nums.length; i++){
        if(curSum == total - nums[i]- curSum){
            return i;
        }
        curSum = curSum + nums[i];
    }

    return -1;
};
