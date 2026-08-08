class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let newArray = [...nums1, ...nums2].sort((a,b) => a - b);

        console.log(newArray)

        const length = newArray.length;

        if(length%2===0){
            return (newArray[length/2] + newArray[length/2 - 1])/2
        } else {
            return newArray[Math.floor(length/2)]
        }
    }
}
