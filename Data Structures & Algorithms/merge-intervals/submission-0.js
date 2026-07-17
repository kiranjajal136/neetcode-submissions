class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let sorted = intervals.sort((a,b) => a[0]-b[0]);
        let merged = [sorted[0]];

        for(let i=1;i<sorted.length;i++) {
            const lastIndex = merged.length-1;

            if(sorted[i][0] <= merged[lastIndex][1]) {
                merged[lastIndex][1] = sorted[i][1] >= merged[lastIndex][1] ? sorted[i][1] : merged[lastIndex][1];
            } else {
                merged.push(sorted[i])
            }
        }

        return merged;
    }
}
