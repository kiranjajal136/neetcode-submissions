class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zeroCount = 0;

        for (const num of nums) {
            if (num === 0) {
                zeroCount++;
            } else {
                product *= num;
            }
        }

        const ans = new Array(nums.length).fill(0);

        if (zeroCount > 1) return ans;

        if (zeroCount === 1) {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] === 0) {
                    ans[i] = product;
                }
            }
            return ans;
        }

        for (let i = 0; i < nums.length; i++) {
            ans[i] = product / nums[i];
        }

        return ans;
    }
}