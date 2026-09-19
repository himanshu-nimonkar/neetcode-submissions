class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {return false}

        const map = {}
        for (let c = 0; c < s.length; c++) {
            if (!map[s[c]]) {
                map[s[c]] = 1
            }
            else {map[s[c]]++}
        }
        for (let c = 0; c < t.length; c++) {
            if (!map[t[c]]) {
                return false
            }
            else {map[t[c]]--}
        }

        return true
        
    }
}
