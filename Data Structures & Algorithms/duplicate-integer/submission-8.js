class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Set()

        for (let i = 0; i < nums.length; i ++){
            let num = nums[i]
            if (hash.has(num)){
                return true
            }
            else {
                hash.add(num)
            }

        }

        return false
    }
}
