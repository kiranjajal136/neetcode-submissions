class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        let cache = [];
        cache[1] = 1;
        cache[2] = 2;

        let i = 3;
        while(i<=n) {
            cache[i] = cache[i-1] + cache[i-2];
            i++;
        }

        return cache[n];
        
    }
}
