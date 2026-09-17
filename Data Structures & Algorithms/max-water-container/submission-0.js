class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = (heights.length) - 1

        let maxArea = (r-l) * Math.min(heights[l], heights[r])

        while (l<r) {
            if (heights[l]<heights[r]) {
                l++
            }
            else {
                r--
            }
            const newArea = (r-l) * Math.min(heights[l], heights[r])
            if (newArea>maxArea) {
                maxArea = newArea
            }
        }
        return maxArea
    }
}
