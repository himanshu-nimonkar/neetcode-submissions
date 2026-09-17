class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s === '') {
            return true
        }
        let newStr = ''
        for (const char of s) {
            let newChar = char.toLowerCase()
            let code = newChar.charCodeAt(0)
            if ((code>47 && code<58) || (code>96 && code<123)) {
                newStr = newStr.concat(newChar)
            }
        }
        let left = 0
        let right = (newStr.length)-1
        while (left < right) {
            if (newStr[left] === newStr[right]) {
                left++
                right--
                continue
            }
            else {return false}

        }
        return true
    }
}
