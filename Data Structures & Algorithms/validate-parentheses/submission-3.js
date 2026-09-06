class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const pairs = {
            "}" : "{",
            "]" : "[",
            ")" : "("
        }
        for (const char of s){

            if (char === "{" || char === "[" || char === "("){
                stack.push(char)
            }
            else {
                const last = stack.pop()
                // check if the pop char is the opening of the current char 

                if (last !== pairs[char]){
                    return false
                }

            }

            
        }

        if (stack.length === 0){
            return true
        }

        return false
    }
}
