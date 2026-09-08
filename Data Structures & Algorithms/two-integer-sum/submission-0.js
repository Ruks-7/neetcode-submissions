class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Initiliaze a map
        let numMap = new Map()

        // Loop through the array
        for (let n=0; n<nums.length; n++){
            // Calculate the difference
            let diff = target - nums[n];

            // Look for the difference in the map
            if (numMap.has(diff)){
                return [numMap.get(diff), n];
            }
            //Add the number and its index if it doesn't exist in the map
            numMap.set(nums[n], n);
        }
    }
}
