class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = [];

        for(let i=0;i<strs.length;i++) {
            sorted[i] = strs[i].split('').sort().join('');
        }

        let cHash = {}

        for(let i=0;i<sorted.length;i++) {
            if (!cHash[sorted[i]]) {
                cHash[sorted[i]] = [];
            }
            cHash[sorted[i]].push(strs[i]);
        }
        return Object.values(cHash)
    }
}
