/**
 * Definition for singly-linked list.
 */
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    return this;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export var reverseList = function (head) {
    let curr = head;
    let prev = null;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};