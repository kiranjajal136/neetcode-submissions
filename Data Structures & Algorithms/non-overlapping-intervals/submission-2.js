class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let sorted = intervals.sort((a,b) => a[1]-b[1]);
        let lastEnd = sorted[0][1];
        let removed = 0

        for(let i=1;i<sorted.length;i++) {
            if(sorted[i][0]<lastEnd) removed++;
            else lastEnd = sorted[i][1];
        }
        return removed;
    }
}
