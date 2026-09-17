class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const newObj = nums.reduce((total, current) => {
            total[current] = true
            return total
        }, {})

        let longest = 0
        for (let key in newObj) {
            const num = Number(key)
            if (!((num-1) in newObj)) {
                const newArr = []
                let current = num
                newArr.push(current)
                while ((current+1) in newObj) {
                    newArr.push(current+1)
                    current++
                }
                const newLongest = newArr.length
                if (longest<newLongest) {
                    longest = newLongest
                }
            }
        }
        return longest
    }
}
