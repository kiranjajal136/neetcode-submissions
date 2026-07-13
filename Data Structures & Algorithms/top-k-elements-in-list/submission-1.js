class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hash = {}
        for(let i=0;i<nums.length;i++) {
            if(hash[nums[i]]) hash[nums[i]]++
            else {
                hash[nums[i]] = 1
            }
        }

        const sorted = Object.entries(hash).sort(([, a], [, b]) => b - a);

        return sorted.slice(0, k).map(([key]) => key);

    }
}
