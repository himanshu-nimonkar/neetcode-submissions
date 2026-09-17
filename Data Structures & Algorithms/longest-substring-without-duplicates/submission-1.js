class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const newArr = Array.from(s)

        let l = 0
        let r = 0
        let seen = {}
        let maxLen = 0

        while (r<s.length) {
            while (seen[newArr[r]]) {
                delete seen[newArr[l]]
                l++
            }

            seen[newArr[r]] = true
            maxLen = Math.max(maxLen, r-l+1)
            r++
        } 
        return maxLen
    }
}
