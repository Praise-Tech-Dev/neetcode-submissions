class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = new Map()

        for (let i = 0; i < nums.length; i ++){
            let compliment = target - nums[i]
            if (hash.has(compliment)){
                return [hash.get(compliment), i]
            }

            else {
                hash.set(nums[i], i)
            }
        }
        return []
    }
}
