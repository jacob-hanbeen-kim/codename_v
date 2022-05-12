// 0,1,0,3,12 to 1,3,12,0,0:

export const moveZeros = function (nums) {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[index] === 0){
            nums.push(nums.splice(index,1)[0])
        } else {
            index ++;
        }
    }
    return nums;
};