class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let r = 1

        let maxProfit = 0
        while (r<prices.length) {
            const profit = prices[r] - prices[l]
            if (profit<0) {
                l = r
                r = l+1
            }
            else {
                if (maxProfit<profit) {
                    maxProfit = profit
                }
                r++
            }
        }
        return maxProfit = maxProfit<0 ? 0 : maxProfit
    }
}
