class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.replace(/[^\w]/g, '');

        let i=0, j=newS.length-1;

        while(i<=newS.length/2 && j>=newS.length/2) {
            if(newS.charAt(i).toLowerCase() !== newS.charAt(j).toLowerCase()) return false
            i++;
            j--;
        }

        return true;
    }
}
