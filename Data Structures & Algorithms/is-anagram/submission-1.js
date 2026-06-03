class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sHash = {};
        let tHash = {};

        let i;

        if(s.length !== t.length) return false
        //less optimal solution

        // for(i=0;i<s.length;i++) {
        //     sHash[s.charAt(i)] = (sHash[s.charAt(i)] || 0) + 1;
        // }
        // for(i=0;i<t.length;i++) {
        //     tHash[t.charAt(i)] = (tHash[t.charAt(i)] || 0) + 1;
        // }
        // for(i=0;i<s.length;i++) {
        //     if(sHash[s.charAt(i)] !== tHash[s.charAt(i)]) {
        //         return false
        //     }
        // }

        //more optimal solution
        let sSort = s.split('').sort().join();
        let tSort = t.split('').sort().join();
        return sSort == tSort;
    }
}
