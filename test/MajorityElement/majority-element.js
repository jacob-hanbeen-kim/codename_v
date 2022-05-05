import { majorityElement } from '../../src/MajorityElement/majority-element.js'
import { expect } from 'chai';

describe('majority element', () => {
    it('small array', () => {
        const t0 = performance.now();
        let nums = [3, 2, 3]
        expect(3).to.eql(majorityElement(nums));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })

    it('medium', () => {
        const t0 = performance.now();
        let nums = [2, 2, 1, 1, 1, 2, 2]
        expect(2).to.eql(majorityElement(nums));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })

    it('large', () => {
        const t0 = performance.now();
        let nums = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, -1, 3, 3, 3, 3, 3, 5]
        expect(2).to.eql(majorityElement(nums));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })

    it('very large', () => {
        const t0 = performance.now();
        let nums = Array(1000 * 1000).fill(5);
        nums[1] = 3;
        nums[6] = 3;
        nums[100] = 3;
        expect(5).to.eql(majorityElement(nums));
        const t1 = performance.now();
        console.log(`it took ${t1 - t0} milliseconds.`);
    })
})