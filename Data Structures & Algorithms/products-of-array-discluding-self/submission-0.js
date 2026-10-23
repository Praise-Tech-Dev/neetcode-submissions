class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);
        let prefix = 1;
        for (let i = 0; i <nums.length; i ++){
            res[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;
        let j = nums.length - 1;
        for (j; j >=0; j--){
            res[j] *= suffix;
            suffix *= nums[j];
        }

        return res;
    }
}
