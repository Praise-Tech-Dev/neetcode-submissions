class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s_array = s.split("").sort().join("")
        let t_array = t.split("").sort().join("")

        if (s_array === t_array){
            return true
        }
        return false

    }
}
