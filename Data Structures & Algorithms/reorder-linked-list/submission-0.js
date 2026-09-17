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
     * @return {void}
     */
    reorderList(head) {
        let fast = head
        let slow = head
        while (fast!=null && fast.next!=null) {
            slow = slow.next
            fast = fast.next.next
        }
        let prev = null
        let current = slow.next
        slow.next = null

        while (current) {
            let temp = current.next
            current.next = prev
            prev = current
            current = temp
        }

        let l1 = head
        let l2 = prev

        while (l2 != null) {
            let t1 = l1.next
            let t2 = l2.next

            l1.next = l2
            l2.next = t1

            l1 = t1
            l2 = t2
        }

    }
}
