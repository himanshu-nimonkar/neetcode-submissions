class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = nums.reduce((total, currentVal) => {
            const key = currentVal
            if (!(total[key])) {
                total[key] = 1
            }
            else {total[key] = total[key] + 1}
            return total
        }, {})

        const buckets = Array(nums.length + 1).fill(null).map(() => [])

        for (let num in freq) {
            buckets[freq[num]].push(Number(num))
        }

        return buckets.flat().slice(-k)
    }
}
