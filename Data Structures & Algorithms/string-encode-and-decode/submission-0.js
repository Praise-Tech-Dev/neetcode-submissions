class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        const res = [];
        for (const s of strs){
            res.push(String(s.length), "#", s);
        }
        return res.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const res = [];
        while (i < str.length){
            let j = i;
            while(str[j] !=="#"){
                j++
            }
            // does not include the j
            let length = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + length;
            res.push(str.substring(i,j))
            // next string is after the last index
            i = j;
        }
        return res;
    }
}
