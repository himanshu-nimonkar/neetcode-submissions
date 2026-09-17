class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    let stack = []
    for (let ch of s) {
        if (ch === '(') {
            stack.push(')')
        }
        else if (ch === '[') {
            stack.push(']')
        }
        else if (ch === '{') {
            stack.push('}')
        }
        else {
            if (ch != stack.pop()) {
                return false
            }
        }
    }
    return stack.length === 0
}
}
