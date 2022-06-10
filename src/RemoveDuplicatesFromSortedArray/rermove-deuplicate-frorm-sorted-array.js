export const removeDuplicates = function (nums) {
    let scanningItem = [];
    let scanningItemPlus = [];
    let uniqueIndex=0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] < 0 ){
            if(!scanningItem.includes(nums[i])){
                scanningItem.push(nums[i]);
                let temp = nums[i];
                nums[i]=null
                nums[uniqueIndex]=temp;
                uniqueIndex++;
            }
        } else {
            if(!scanningItemPlus.includes(nums[i])){
                scanningItemPlus.push(nums[i]);
                let temp = nums[i];
                nums[i]=null
                nums[uniqueIndex]=temp;
                uniqueIndex++;            
            }
        }
    }
    return nums = nums.splice(0,uniqueIndex)
    // return nums = nums.splice(uniqueIndex,nums.length) ->> this is correct one
};