/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) {return []}

        const result = []
        let queue = [root]

        while (queue.length > 0) {
            result.push(queue.map(node => node.val));
            queue = queue.flatMap(node => [node.left, node.right].filter(child => child !== null));
        }

        return result;
    }
}
