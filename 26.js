
//26. Remove Duplicates form Sorted Array


var removeDuplicates = (nums) => {

    for (let i = 0; i < nums.length; i++) {
/*         if (i >= nums.length) {
            break;
        } */
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
};

console.log(removeDuplicates([1,1,2,2,3,4,5,5]));

