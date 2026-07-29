class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let s = '';
        let num = n

        let count = 0;
        while(num>0) {
            s+=num%2;

            if(num%2 === 1) count++;
            num = Math.floor(num/2);
        }
        // for(let i=0;i<s.length;i++){
        //     if(s.charAt(i) === '1') {
        //         count++
        //     }
        // }
        return count;
    }
}
