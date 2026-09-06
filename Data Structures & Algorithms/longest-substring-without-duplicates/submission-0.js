class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;

        const hash = new Map()

        for (let right = 0; right < s.length; right ++){

            while (hash.has(s[right])){
                hash.delete(s[left])

                left ++
            }

            hash.set(s[right], true)

            maxLength = Math.max(maxLength, right - left + 1)
        }

        return maxLength;
    }
}
