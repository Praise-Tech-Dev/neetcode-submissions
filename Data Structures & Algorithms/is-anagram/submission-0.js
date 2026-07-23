class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length){
            return false
        }

        const s_array = s.split("").sort().join();
        const t_array = t.split("").sort().join();

        return s_array === t_array
    }
}
