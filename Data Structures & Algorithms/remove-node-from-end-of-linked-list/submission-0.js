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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let l1 = head
        let l2 = head

        for (let i = 0; i<n; i++) {l2 = l2.next}

        if (l2 === null) {
            return head.next
        }

        while (l2.next){
            l2 = l2.next
            l1 = l1.next
        }

        l1.next = l1.next.next
        return head


    }
}
