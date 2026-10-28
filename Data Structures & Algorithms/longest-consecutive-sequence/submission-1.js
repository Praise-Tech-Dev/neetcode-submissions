class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;


        for (const num of nums){

            // check if we have a less or greater element
            if (!numSet.has(num - 1)){
                let length = 1;

                while (numSet.has(num + length )) {
                    length ++;

                }

                longest = Math.max(length, longest);
                console.log(longest)
            }

            
        }
        
        return longest;

    }
}
