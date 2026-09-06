class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        for (const char of s){

            if (char === "{" || char === "[" || char === "("){
                stack.push(char)
            }
            else {
                const last = stack.pop()
                // check if the pop char is the opening of the current char 

                if (
                    (last === "{" && char === "}") || 
                    (last === "(" && char === ")") || 
                    (last === "[" && char === "]")
                    ){
                    continue
                }

                else {
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
