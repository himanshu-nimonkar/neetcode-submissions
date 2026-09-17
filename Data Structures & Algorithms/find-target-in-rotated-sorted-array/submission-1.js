class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1

        while (l<r) {
            let mid = Math.floor((l+r)/2)

            if (nums[mid] < nums[r]) {
                r = mid
            }
            else {l = mid+1}
        }
        const split = l
        if ((nums[split] <= target) && (target <= nums[nums.length - 1])) {
            let left = split
            let right = nums.length - 1
            while (left<=right) {
                let mid = Math.floor((left + right) / 2) 
                if (nums[mid] === target) { return mid } 
                if (nums[mid] < target) { left = mid + 1 } 
                else { right = mid - 1 }
            }
        }
        else{
            let left = 0
            let right = split-1
            while(left<=right) {
            let mid = Math.floor((left + right) / 2) 
            if (nums[mid] === target) { return mid } 
            if (nums[mid] < target) { left = mid + 1 } 
            else { right = mid - 1 }
            }

        }
        return -1
    }
}
