// https://leetcode.com/problems/reverse-linked-list/submissions/

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
var reverseList = function(head) {    
    let reverse = null;
    
    while (head !== null) {
        reverse = new ListNode(head.val, reverse)
        head = head.next;
    }
    
    return reverse;
};
