class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let s = '';
        let num = n
        while(num>0) {
            s+=num%2;
            num = Math.floor(num/2);
        }
        let count = 0;
        for(let i=0;i<s.length;i++){
            if(s.charAt(i) === '1') {
                count++
            }
        }
        return count;
    }
}
