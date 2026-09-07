class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNums = new Set(nums)
        const duplicates = uniqueNums.size != nums.length
        return duplicates
    }
}
