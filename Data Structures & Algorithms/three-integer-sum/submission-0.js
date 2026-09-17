class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a, b) => a-b)
        const res = []

        for (let i=0; i<(nums.length)-2; i++) {
            if (i > 0 && nums[i] === nums[i-1]) {continue}

            for (let j=i+1, k=(nums.length)-1; j<k;) {
                const s = nums[i] + nums[j] + nums[k]
                if (!s) {
                    res.push([nums[i], nums[j], nums[k]])
                    while(nums[j]===nums[++j]) {}
                    while(nums[k]===nums[--k]) {}
                }
                else {s<0? j++ : k--}
            }

            }
            return res
        }
    }
