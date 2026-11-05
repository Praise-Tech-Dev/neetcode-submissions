class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        nums = nums.sort((a,b) => a - b);
        console.log(nums)
        for (let i = 0; i < nums.length; i ++){
            let fixed = nums[i];

            let left = i + 1 ;
            let right = nums.length - 1;

            if (i> 0 && nums[i] === nums[i - 1]){
                continue
            }

            while (left < right){
                const sum = fixed + nums[left] + nums[right];

                if (sum < 0){
                    left ++
                    
                }
                else if (sum > 0){
                    right --
                }
                else {
                    result.push([fixed , nums[left], nums[right]])
                    left ++;
                    right++;
                    while ( left < right && nums[left] === nums[left - 1]){
                        left ++;
                    }
                    while ( left < right && nums[right] === nums[right + 1]) {
                        right --;
                    }
                }
            }
        }

        return result
    }
}
