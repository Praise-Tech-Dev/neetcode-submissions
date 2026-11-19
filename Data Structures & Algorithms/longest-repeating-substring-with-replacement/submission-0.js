class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let res = 0;

        const hashMap = new Map();
        for (let right = 0; right < s.length; right ++){
            hashMap.set(s[right], (hashMap.get(s[right]) || 0) +1)
            maxFreq = Math.max(maxFreq, hashMap.get(s[right]))

            let windowLength = right - left + 1;
            if (windowLength - maxFreq > k){
                hashMap.set(s[left], hashMap.get(s[left]) - 1);
                left ++;
            }
            windowLength = right - left + 1;
            res = Math.max(res, windowLength);

        }

        return res;
    }
}
