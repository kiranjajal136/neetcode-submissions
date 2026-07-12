class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let xor=nums.length;
        for(let i=0;i<n;i++) {
            xor^=i;
            xor^=nums[i]
        }

        return xor;
    }
}
