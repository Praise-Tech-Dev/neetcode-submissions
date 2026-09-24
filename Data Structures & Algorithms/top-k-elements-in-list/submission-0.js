class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();

        for (const num of nums ){
            if (freqMap.has(num)){
                freqMap.set(num, freqMap.get(num) + 1)
            } else {
                freqMap.set(num, 1)
            }

        }
        
        const bucket = Array.from({
            length: nums.length + 1
        }, () => [])

        for (const [num, freq] of freqMap){
            bucket[freq].push(num)
        }

        const result = []

        for (let i = nums.length; i>=0; i --){
            for (const num of bucket[i]){
                result.push(num)
                if (result.length === k){
                    return result
                }
            }

            
        }

        return;
        
    }
}
