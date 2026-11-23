class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const countT = new Map();
        const windowCount = new Map();
        let left = 0;
        let have = 0;
        let minLength = Infinity;
        let result = "";

        for (let char of t) {
            countT.set(char, (countT.get(char) || 0)+ 1);
        }
        
        let need = countT.size;

        for (let right = 0; right < s.length; right ++){
            const char = s[right];

            if (countT.has(char)){
                windowCount.set(char, (windowCount.get(char) || 0) + 1);

                if (countT.get(char) === windowCount.get(char)){
                    have ++
                }
            }

            while (have === need){
                const windowLength = right - left + 1;
                if (windowLength < minLength){
                    minLength = windowLength;
                    result = s.slice(left, right + 1)
                }

                const leftChar = s[left];

                if (countT.has(leftChar)){
                    windowCount.set(leftChar, windowCount.get(leftChar)- 1);
                    
                    if (windowCount.get(leftChar) < countT.get(leftChar)){
                        have --;
                    } 
                }
                left ++;

                
            }
        }

        return result;

    }
}
