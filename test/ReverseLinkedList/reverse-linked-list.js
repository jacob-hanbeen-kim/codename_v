import { ListNode, reverseList } from '../../src/ReverseLinkedList/reverseLinkedList.js'
import { expect } from 'chai';

describe.only('reverse linked list', () => {
    it('[1,2,3,4,5]', () => {
        const t0 = performance.now();
        let next = null;
        [5, 4, 3, 2, 1].forEach((val) => {
            let temp = ListNode(val, next);
            next = temp;
        })

        expect([1, 2, 3, 4, 5]).to.eql(reverseList(next));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })
})