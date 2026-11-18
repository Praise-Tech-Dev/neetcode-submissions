class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0];
        let res = 0
        for (let i = 0 ; i < prices.length; i ++){
            buy = Math.min(buy, prices[i])
            
            let profit = prices[i] - buy

            res = Math.max(res, profit)
        }

        return res
    }
}
