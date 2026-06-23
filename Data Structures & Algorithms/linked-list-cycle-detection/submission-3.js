/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        let curr = head;
        let s = curr;
        let f = curr;
        while(s!==null || f!==null) {
            if(!s || !f || s.next === null || f.next === null) return false
            else {
                s=s.next;
                f=f.next.next;

                if(s === f) return true
            }
        }

        return false;
    }
}
