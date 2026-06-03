class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.replace(/[^\w]/g, '');

        let reversedString = newS.split('').reverse().join('');
        if(newS.toLowerCase() === reversedString.toLowerCase()) return true
        return false
    }
}
