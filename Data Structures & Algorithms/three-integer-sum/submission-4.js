class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let op = [];

        let sorted = nums.sort((a, b) => a - b);
        for(let i=0;i<sorted.length;i++) {
            let a = sorted[i];

            if (i > 0 && sorted[i] === sorted[i - 1]) {
                continue;
            }

            let l = i+1;
            let r = sorted.length - 1;

            while(l<r) {
                if(a+sorted[l]+sorted[r] < 0) l++;
                else if(a+sorted[l]+sorted[r] > 0) r--;
                else {
                    let target = [a, sorted[l], sorted[r]]
                    const exists = op.some(
                        subArr =>
                            subArr.length === target.length &&
                            subArr.every((value, index) => value === target[index])
                        )
                    if(!exists) {
                        op.push([a,sorted[l],sorted[r]])
                    }
                    l++;
                    r--;
                }
            }
        }

        return op
    }
}
