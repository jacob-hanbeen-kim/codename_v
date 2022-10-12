// https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let count = 0;
    let cur = head;;
    while (cur != null) {
        cur = cur.next;
        count++;
    }
    
    
    let middle = Math.floor(count / 2);
    while (middle > 0) {
        head = head.next;
        middle--;
    }
    
    return head;
};
